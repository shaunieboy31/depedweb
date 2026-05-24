import type { Request, Response } from "express";
import { FileService } from "../services/file.service";
import { sendError, sendSuccess } from "./base.controller";

export class UploadController {
  static async uploadBase64(req: Request, res: Response) {
    try {
      const { filename, data } = req.body;
      if (!filename || !data || typeof data !== "string") {
        return sendError(res, "Filename and file data are required", 400);
      }

      const fileUrl = await FileService.uploadBase64(filename, data);
      return sendSuccess(res, fileUrl);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to upload file");
    }
  }
}
