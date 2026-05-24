import type { Request, Response } from "express";
import prisma from "../lib/prisma";
import { sendError, sendSuccess } from "./base.controller";

export class CarouselController {
  static async getAll(_req: Request, res: Response) {
    try {
      const data = await prisma.carouselSlide.findMany({ orderBy: { createdAt: "desc" } });
      return sendSuccess(res, data);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to fetch carousel slides");
    }
  }

  static async create(req: Request, res: Response) {
    try {
      const { image } = req.body;
      if (!image || typeof image !== "string") {
        return sendError(res, "Image URL is required", 400);
      }
      const slide = await prisma.carouselSlide.create({ data: { image } });
      return sendSuccess(res, slide);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to create carousel slide");
    }
  }

  static async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await prisma.carouselSlide.delete({ where: { id } });
      return sendSuccess(res);
    } catch (error: any) {
      return sendError(res, error.message || "Failed to delete carousel slide");
    }
  }
}
