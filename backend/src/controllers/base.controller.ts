import type { Response } from "express";

export function sendSuccess(res: Response, data: unknown = null) {
  return res.json({ success: true, data });
}

export function sendError(res: Response, message: string, status = 500) {
  return res.status(status).json({ success: false, error: message });
}
