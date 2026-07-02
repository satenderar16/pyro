import prisma from "../config/prisma";
import { Request, Response } from "express";
import { SignupSchema, SignupInput } from "../schema/auth.schema";
import { SigninSchema,SigninInput } from "../schema/auth.schema";
import { ErrorCode } from "../utils//errors/codes.error";
import { ResponseBuilder } from "../utils/responses/builder.response";
import {
  generateAccessToken,
  generateRefreshToken,
  verifyToken
} from "../utils/jwt";



const bcrypt = require("bcrypt");
const crypto = require("crypto");

// SIGNUP 
const signup = async (req: Request<{}, {}, SignupInput>, res: Response) => {
  try {
    
    const result = SignupSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Validation failed"
        )
      );
    }

    const { name, username, email, password } = result.data;

    const existingUser = await prisma.users.findFirst({
      where: {
        OR: [{ email }, { username }],
      },
    });

    if (existingUser) {
      return res.status(409).json(
        ResponseBuilder.error(
          ErrorCode.USER_ALREADY_EXISTS,
          "Email or username already exists"
        )
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.users.create({
      data: {
        name,
        username,
        email,
        password: hashedPassword,
      },
    });


    const payload = { user_id: user.id};
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
    .json(
      ResponseBuilder.success(
          {
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
   
          },
          "Signup successful"
        )
      );

  } catch (err) {
    // edge case user created then internal error occur -> remove user from db:
   return res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Something went wrong"
      )
    );
  }
};


const signin = async (
  req: Request<{}, {}, SigninInput>,
  res: Response
) => {
  try {
    const result = SigninSchema.safeParse(req.body);

    if (!result.success) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Validation failed"
        )
      );
    }

    const { email, password } = result.data;

    const user = await prisma.users.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json(
        ResponseBuilder.error(
          ErrorCode.AUTH_INVALID_CREDENTIALS,
          "Invalid  password"
        )
      );
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json(
        ResponseBuilder.error(
          ErrorCode.AUTH_INVALID_CREDENTIALS,
          "Invalid  password"
        )
      );
    }

    const companyUsers = await prisma.companyUser.findMany({
      where: {
        user_id: user.id,
      },
      include: {
        company: true,
        role: true,
      },
    });

    const companyUser = companyUsers.map((cu) => ({
      company: cu.company,
      role: cu.role,
      role_id: cu.role_id,
      user_type: cu.user_type,
    })).filter((cu)=>cu.company.deleted_at === null);

    const payload = {
      user_id: user.id,
    };

    const accessToken = generateAccessToken(payload);
    const refreshToken = generateRefreshToken(payload);

    const accessTokenExpiry = new Date(
      Date.now() + Number(process.env.JWT_ACCESS_EXPIRY)
    );

    const refreshTokenExpiry = new Date(
      Date.now() + Number(process.env.JWT_REFRESH_EXPIRY)
    );

    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    await prisma.refreshToken.create({
      data: {
        user_id: user.id,
        token_hash: refreshTokenHash,
        expired_at: refreshTokenExpiry,
        device: req.headers["user-agent"] || "unknown",
      
      },
    });

    return res
      .status(200)
      .cookie("access_token", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: accessTokenExpiry,
      })
      .cookie("refresh_token", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        expires: refreshTokenExpiry,
      })
      .json(
        ResponseBuilder.success(
          {
            user: {
              id: user.id,
              name: user.name,
              username: user.username,
              email: user.email,
            },
            company_user: companyUser,
            access_token: accessToken,
            refresh_token: refreshToken,
            access_expiry: accessTokenExpiry,
            refresh_expiry: refreshTokenExpiry,
          },
          "Signin successful"
        )
      );
  } catch (err) {
    console.error(err);

    return res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Something went wrong"
      )
    );
  }
};

const signout = async (req: Request, res: Response) => {
  try {
    const refreshToken =
      req.headers["x-refresh-token"] ||
      req.cookies?.refresh_token;

    if (!refreshToken) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.VALIDATION_ERROR,
          "Refresh token not found"
        )
      );
    }

    const tokenHash = crypto
      .createHash("sha256")
      .update(refreshToken as string)
      .digest("hex");

    const storedToken = await prisma.refreshToken.findFirst({
      where: {
        token_hash: tokenHash,
      },
    });

    if (!storedToken) {
      return res.status(400).json(
        ResponseBuilder.error(
          ErrorCode.JWT_ERROR,
          "Invalid refresh token"
        )
      );
    }

    if (storedToken.expired_at < new Date()) {
      await prisma.refreshToken.delete({
        where: {
          id: storedToken.id,
        },
      });

      return res.status(401).json(
        ResponseBuilder.error(
          ErrorCode.JWT_TOKEN_EXPIRED,
          "Refresh token has expired"
        )
      );
    }

    await prisma.refreshToken.delete({
      where: {
        id: storedToken.id,
      },
    });

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
      .json(
        ResponseBuilder.success(
          null,
          "Signout successful"
        )
      );
  } catch (err) {
    console.error(err);

    return res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Something went wrong"
      )
    );
  }
};



const refresh = async (req: Request, res: Response) => {
  try {
    const refreshToken =
      req.headers["x-refresh-token"] ||
      req.cookies?.refresh_token;

    if (!refreshToken) {
      return res.status(401).json(
        ResponseBuilder.error(
          ErrorCode.JWT_ERROR,
          "Refresh token not found"
        )
      );
    }

    let decoded: any;

    try {
      decoded = verifyToken(refreshToken as string);
    } catch (err) {
      return res.status(403).json(
        ResponseBuilder.error(
          ErrorCode.JWT_ERROR,
          "Invalid refresh token"
        )
      );
    }

    const oldTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken as string)
      .digest("hex");

    const storedToken = await prisma.refreshToken.findFirst({
      where: {
        token_hash: oldTokenHash,
      },
    });

    if (!storedToken) {
      return res.status(403).json(
        ResponseBuilder.error(
          ErrorCode.JWT_ERROR,
          "Token not found or revoked"
        )
      );
    }

    if (storedToken.expired_at < new Date()) {
      await prisma.refreshToken.delete({
        where: {
          id: storedToken.id,
        },
      });

      return res.status(403).json(
        ResponseBuilder.error(
          ErrorCode.JWT_TOKEN_EXPIRED,
          "Refresh token expired"
        )
      );
    }

    const payload = {
      user_id: decoded.user_id,
    };

    const newAccessToken = generateAccessToken(payload);
    const newRefreshToken = generateRefreshToken(payload);

    const accessTokenExpiry = new Date(
      Date.now() + Number(process.env.JWT_ACCESS_EXPIRY)
    );

    const refreshTokenExpiry = new Date(
      Date.now() + Number(process.env.JWT_REFRESH_EXPIRY)
    );

    const newRefreshTokenHash = crypto
      .createHash("sha256")
      .update(newRefreshToken)
      .digest("hex");

    await prisma.refreshToken.update({
      where: {
        id: storedToken.id,
      },
      data: {
        token_hash: newRefreshTokenHash,
        expired_at: refreshTokenExpiry,
        device: req.headers["user-agent"] || "unknown",
     
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
      .json(
        ResponseBuilder.success(
          {
            access_token: newAccessToken,
            refresh_token: newRefreshToken,
            access_expiry: accessTokenExpiry,
            refresh_expiry: refreshTokenExpiry,
          },
          "Token refreshed successfully"
        )
      );
  } catch (err) {
    console.error(err);

    return res.status(500).json(
      ResponseBuilder.error(
        ErrorCode.INTERNAL_ERROR,
        "Something went wrong"
      )
    );
  }
};

export default   {
  signup,
  signin,
  signout,
  refresh
};