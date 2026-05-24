import type { Request, Response } from "express";
import bcrypt from "bcryptjs";
import prisma from "../lib/prisma";
import { sendError, sendSuccess } from "./base.controller";

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;
      if (!username || !password) {
        return sendError(res, "Username and password are required", 400);
      }

      const user = await prisma.user.findUnique({ where: { username } });
      if (!user) {
        return sendError(res, "Invalid username or password", 401);
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return sendError(res, "Invalid username or password", 401);
      }

      return sendSuccess(res, { id: user.id, username: user.username, role: user.role });
    } catch (error: any) {
      return sendError(res, error.message || "Login failed");
    }
  }
}
