import { readFileSync, existsSync } from "fs";
import { join } from "path";

import { NextRequest, NextResponse } from "next/server";

import { crmAuth } from "@/lib/crm-auth";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const denied = crmAuth(req);
  if (denied) return denied;

  const path = join(process.cwd(), "public", "crm.json");
  if (!existsSync(path)) {
    return NextResponse.json(
      {
        error: "CRM data not exported yet. Run: python -m pipeline.crm_export export",
        updated_at: null,
        overview: {},
        leads: [],
        clients: [],
        revenue: {},
      },
      { status: 503 },
    );
  }

  const raw = readFileSync(path, "utf-8");
  return new NextResponse(raw, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "private, max-age=300",
    },
  });
}
