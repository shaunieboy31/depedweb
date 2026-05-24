import type { Request, Response } from "express";
import { ContactService } from "../services/contact.service";
import { sendError, sendSuccess } from "./base.controller";

export class ContactController {
  static async getInfo(_req: Request, res: Response) {
    try {
      const data = await ContactService.getInfo();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch contact info");
    }
  }

  static async updateInfo(req: Request, res: Response) {
    try {
      const data = await ContactService.updateInfo(req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update contact info");
    }
  }
}
