import type { Request, Response } from "express";
import { IssuanceService } from "../services/issuance.service";
import { sendError, sendSuccess } from "./base.controller";

export class IssuanceController {
  static async getAll(req: Request, res: Response) {
    try {
      const { category, type } = req.query;
      const data = await IssuanceService.getAll({
        category: category ? String(category) : undefined,
        type: type ? String(type) : undefined,
      });
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch issuances");
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const issuance = await IssuanceService.create(req.body);
      return sendSuccess(res, issuance);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create issuance");
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const issuance = await IssuanceService.update(id, req.body);
      return sendSuccess(res, issuance);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update issuance");
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await IssuanceService.delete(id);
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete issuance");
    }
  }
}
