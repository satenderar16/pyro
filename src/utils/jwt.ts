const jwt = require('jsonwebtoken');

export const getEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing env variable: ${key}`);
  }
  return value;
};


export const generateAccessToken = (payload: any) => {
  return jwt.sign(payload, getEnv('JWT_SECRET'), {
    expiresIn: getEnv('JWT_ACCESS_EXPIRY'),
  });
};

export const generateRefreshToken = (payload: any) => {
  return jwt.sign(payload, getEnv('JWT_SECRET'), {
    expiresIn: getEnv('JWT_REFRESH_EXPIRY'),
  });
};

export const verifyToken = (token: any) => {
  return jwt.verify(token, getEnv('JWT_SECRET'));
};

