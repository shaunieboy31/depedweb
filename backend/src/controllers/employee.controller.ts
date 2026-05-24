import type { Request, Response } from "express";
import { EmployeeService } from "../services/employee.service";
import { sendError, sendSuccess } from "./base.controller";

export class EmployeeController {
  static async getHonors(_req: Request, res: Response) {
    try {
      const data = await EmployeeService.getHonors();
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch employee honors");
    }
  }

  static async createHonor(req: Request, res: Response) {
    try {
      const data = await EmployeeService.createHonor(req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create employee honor");
    }
  }

  static async updateHonor(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const data = await EmployeeService.updateHonor(id, req.body);
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to update employee honor");
    }
  }

  static async deleteHonor(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await EmployeeService.deleteHonor(id);
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete employee honor");
    }
  }
}
