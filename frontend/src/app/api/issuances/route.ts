import { NextResponse } from "next/server";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const response = await fetch(`${BACKEND_URL}/api/issuances${url.search}`, { cache: "no-store" });
  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}

