import type { Request, Response } from "express";
import { LeaderService } from "../services/leader.service";
import { sendError, sendSuccess } from "./base.controller";

export class LeaderController {
  static async getAll(_req: Request, res: Response) {
    try {
      const data = await LeaderService.getAll();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch leaders");
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const data = await LeaderService.create(req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create leader");
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await LeaderService.update(id, req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update leader");
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await LeaderService.delete(id);
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete leader");
    }
  }
}
