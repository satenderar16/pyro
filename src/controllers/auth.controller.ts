import prisma from "../config/prisma";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken
} from "../utils/jwt";
import { isValidEmail } from "../utils/validators/email.validator";


const bcrypt = require("bcrypt");
const crypto = require("crypto");

// SIGNUP 
const signup = async (req: any, res: any) => {
  try {
    const { name, username, email, password, business_name } = req.body;

    if (!name || !username || !email || !password) {
      return res.status(400).json({
        message: "Name, username, email, and password are required",
      });
    }

  if (!isValidEmail(email)) {
  return res.status(400).json({ message: "Invalid email" });
}

    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res.status(400).json({
        message: "Email or username already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

  
    const user = await prisma.users.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
        business_name: business_name || null,
      },
    });
 const payload = { user_id: user.id, email: user.email };
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

const accessTokenExpiry = new Date(Date.now() + Number(process.env.JWT_ACCESS_EXPIRY));
const refreshTokenExpiry = new Date(Date.now() + Number(process.env.JWT_REFRESH_EXPIRY));

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    
    await prisma.refreshToken.create({
      data: {
        user_id: user.id,
        token_hash: refreshTokenHash,
        expired_at: refreshTokenExpiry, // 7 days
        device: req.headers["user-agent"] || "unknown",
        ipAddress: req.ip,
      },
    });
   
   
   
    res.status(201)
  .cookie("access_token", accessToken, {
    httpOnly: true,
    secure:  process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: accessTokenExpiry,
  })
  .cookie("refresh_token", refreshToken, {
    httpOnly: true,
    secure:  process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: refreshTokenExpiry,
  })
  .json({
    message: "Signup successful",
      user: {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
      },
     "access_token": accessToken,
     "refresh_token":refreshToken,
      "access_expiry": accessTokenExpiry,
      "refresh_expiry": refreshTokenExpiry
  });

   
  } catch (err) {
    // edge case user created then internal error occur -> remove user from db:
    console.error(err);
    res.status(500).json({ message: "something went wrong" });
  }
};

const signin = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;
   
    if (!isValidEmail(email)) {
          return res.status(400).json({ message: "Invalid email" });
        }

    // 1. Find user
    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // 2. Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const payload = { user_id: user.id, email: user.email };

    // 3. Generate tokens
    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

const accessTokenExpiry = new Date(Date.now() + Number(process.env.JWT_ACCESS_EXPIRY));
const refreshTokenExpiry = new Date(Date.now() + Number(process.env.JWT_REFRESH_EXPIRY));
    // 4. Hash refresh token
    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // 5. Store refresh token in DB (IMPORTANT)
    await prisma.refreshToken.create({
      data: {
        user_id: user.id,
        token_hash: refreshTokenHash,
        expired_at: refreshTokenExpiry,
        device: req.headers["user-agent"] || "unknown",
        ipAddress: req.ip,
      },
    });
 return res
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure:  process.env.NODE_ENV === "production", 
        sameSite: "lax",
        expires: accessTokenExpiry,
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure:  process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: refreshTokenExpiry,
      }).status(200)
      .json({
        message: "Signin successful",
       
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          name: user.name,
        },
      "access_token": accessToken,
     "refresh_token":refreshToken,
      "access_expiry": accessTokenExpiry,
      "refresh_expiry": refreshTokenExpiry,
      });

   
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
// SIGNOUT
const signout = async (req: any, res: any) => {
  try {
    const refreshToken = req.cookies.refresh_token;
    if(!refreshToken){
       return res.status(400).json({
        message: "Token not found",
      });
    }

    // hash the incoming token (because DB stores hash)
      const tokenHash = crypto
        .createHash("sha256")
        .update(refreshToken)
        .digest("hex");
      
      const storedToken = await prisma.refreshToken.findFirst({ where:{token_hash:tokenHash}});
      console.log(storedToken);
         if(!storedToken){
       return res.status(400).json({
        message: "Invalid Token",
      });
    }


      if(storedToken.expired_at < new Date()){
        return res.status(400).json({message: "Token is expired"});
      }

      await prisma.refreshToken.delete({
        where: { id:storedToken.id },
      });

    // clear cookies
    return res
      .clearCookie("access_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .clearCookie("refresh_token", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
      })
      .status(200)
      .json({ message: "Signout successful" });

  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};



const refresh = async (req: any, res: any) => {
  try {
     const refreshToken = req.cookies.refresh_token;

    if (!refreshToken) {
      return res.status(401).json({ message: "Token not found" });
    }

    // 1. VERIFY JWT
    let decoded;
    try {
      decoded = verifyToken(refreshToken);
    } catch (err) {
      return res.status(403).json({ message: "Invalid refresh token" });
    }

    // 2. HASH incoming token
    const oldTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // 3. FIND token in DB
    const storedToken = await prisma.refreshToken.findFirst({
      where: {
        token_hash: oldTokenHash,
      },
    });

    if (!storedToken) {
      return res.status(403).json({ message: "Token not found or revoked" });
    }

    if (storedToken.expired_at < new Date()) {
      return res.status(403).json({ message: "Token expired" });
    }

   

    // 5. update TOKEN
    const payload = {
      user_id: decoded.user_id,
      email: decoded.email,
    };

    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);

const accessTokenExpiry = new Date(Date.now() + Number(process.env.JWT_ACCESS_EXPIRY));
const refreshTokenExpiry = new Date(Date.now() + Number(process.env.JWT_REFRESH_EXPIRY));

    // 6. HASH NEW REFRESH TOKEN
    const newRefreshTokenHash = crypto
      .createHash("sha256")
      .update(newRefreshToken)
      .digest("hex");

    // 7. STORE NEW REFRESH TOKEN
    await prisma.refreshToken.update({
      where: {id: storedToken.id},
      data: {
        user_id: decoded.user_id,
        token_hash: newRefreshTokenHash,
        expired_at: refreshTokenExpiry,
        device: req.headers["user-agent"] || "unknown",
        ipAddress: req.ip,
      },
    });


    return res
  .cookie("access_token", newAccessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: accessTokenExpiry,
  })
  .cookie("refresh_token", newRefreshToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    expires: refreshTokenExpiry,
  })
  .status(200)
  .json({
    message: "Successfully",
    "access_token": newAccessToken,
  "refresh_token": newRefreshToken,
  "access_expiry": accessTokenExpiry,
  "refresh_expiry": refreshTokenExpiry,
  });

  
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Server error" });
  }
};

export default   {
  signup,
  signin,
  signout,
  refresh
};