import type { Request, Response } from "express";
import { NewsService } from "../services/news.service";
import { sendError, sendSuccess } from "./base.controller";

export class NewsController {
  static async getAll(_req: Request, res: Response) {
    try {
      const data = await NewsService.getAll();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch news");
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const news = await NewsService.create(req.body);
      return sendSuccess(res, news);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create news");
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const news = await NewsService.update(id, req.body);
      return sendSuccess(res, news);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update news");
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await NewsService.delete(id);
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete news");
    }
  }
}
