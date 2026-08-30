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
        error: null,
        updated_at: null,
        overview: {
          total_leads: 0,
          active_clients: 0,
          emails_sent_month: 0,
          meetings_booked_month: 0,
          revenue_this_month: 0,
          monthly_revenue: 0,
        },
        leads: [],
        clients: [],
        campaigns: [],
        analytics: { trends: { series: [] }, top_templates: [] },
        alerts: { recent: [], account_health: [] },
        payments: {
          pending_invoices: [],
          received_payments: [],
          pending_total: 0,
          revenue_this_month: 0,
          revenue_all_time: 0,
        },
        revenue: {},
        note: "CRM snapshot missing — run: python -m pipeline.crm_export export",
      },
      { status: 200 },
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
