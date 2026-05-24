import type { Request, Response } from "express";
import { OrgChartService } from "../services/org-chart.service";
import { sendError, sendSuccess } from "./base.controller";

export class OrgChartController {
  static async getAll(_req: Request, res: Response) {
    try {
      const data = await OrgChartService.getAll();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch org chart");
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const data = await OrgChartService.create(req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create org chart item");
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await OrgChartService.update(id, req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update org chart item");
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await OrgChartService.delete(id);
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete org chart item");
    }
  }
}
