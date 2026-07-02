// src/middleware/auth.middleware.ts
import {Request,  Response, NextFunction, RequestHandler } from "express";
import { verifyToken } from "../utils/jwt";
import { ErrorCode } from "../utils/errors/codes.error";
import { ResponseBuilder } from "../utils/responses/builder.response";
import { AuthRequest } from "../types/auth-request";

export const authMiddleware:RequestHandler = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]|| req.cookies?.access_token;

    if (!token) {
      return res.status(401).json(
        ResponseBuilder.error(ErrorCode.AUTH_UNAUTHORIZED, "No token provided")
      );
      
    }

    const decoded = verifyToken(token);
    
    //Set req.user for all downstream handlers
    req.user = decoded;

    next();
  } catch (error) {
return res.status(401).json(
      ResponseBuilder.error(ErrorCode.JWT_ERROR, "Invalid or expired token")
    );
   
  }
};