import type { Request, Response } from "express";
import { TransparencyService } from "../services/transparency.service";
import { sendError, sendSuccess } from "./base.controller";

export class TransparencyController {
  static async getAll(_req: Request, res: Response) {
    try {
      const data = await TransparencyService.getAll();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch transparency items");
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const data = await TransparencyService.create(req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create transparency item");
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await TransparencyService.update(id, req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update transparency item");
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await TransparencyService.delete(id);
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete transparency item");
    }
  }
}
