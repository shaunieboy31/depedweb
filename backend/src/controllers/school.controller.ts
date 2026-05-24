import type { Request, Response } from "express";
import { SchoolService } from "../services/school.service";
import { sendError, sendSuccess } from "./base.controller";

export class SchoolController {
  static async getAll(_req: Request, res: Response) {
    try {
      const data = await SchoolService.getAll();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch schools");
    }
  }

  static async getStats(_req: Request, res: Response) {
    try {
      const data = await SchoolService.getSchoolStats();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch school stats");
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const school = await SchoolService.create(req.body);
      return sendSuccess(res, school);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create school");
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const school = await SchoolService.update(id, req.body);
      return sendSuccess(res, school);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update school");
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await SchoolService.delete(id);
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete school");
    }
  }
}
