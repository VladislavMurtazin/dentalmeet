import { readFileSync, existsSync } from "fs";
import { join } from "path";

import { NextRequest, NextResponse } from "next/server";

import { dashboardAuth } from "@/lib/dashboard-auth";

export const runtime = "nodejs";

const EMPTY = {
  updated_at: null,
  today: {},
  week: {},
  month: {},
  trends: { series: [] },
  top_templates: [],
  bottom_templates: [],
};

export async function GET(req: NextRequest) {
  const denied = dashboardAuth(req);
  if (denied) return denied;

  const path = join(process.cwd(), "public", "analytics.json");
  const body = existsSync(path)
    ? readFileSync(path, "utf-8")
    : JSON.stringify(EMPTY, null, 2);

  return new NextResponse(body, {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}
