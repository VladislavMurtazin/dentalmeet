import { readFileSync } from "fs";
import { join } from "path";

import { NextRequest, NextResponse } from "next/server";

import { dashboardAuth } from "@/lib/dashboard-auth";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const denied = dashboardAuth(req);
  if (denied) return denied;

  const html = readFileSync(
    join(process.cwd(), "content", "dashboard.html"),
    "utf-8",
  );
  return new NextResponse(html, {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}
