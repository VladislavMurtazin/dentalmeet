import { NextRequest, NextResponse } from "next/server";

import { clearCrmSessionCookie, setCrmSessionCookie } from "@/lib/crm-auth";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  const password = process.env.CRM_PASSWORD?.trim();
  if (!password) {
    return new NextResponse("CRM_PASSWORD not configured", { status: 503 });
  }

  const contentType = req.headers.get("content-type") || "";
  let submitted = "";
  if (contentType.includes("application/json")) {
    const body = await req.json().catch(() => ({}));
    submitted = String(body?.password || "");
  } else {
    const form = await req.formData();
    submitted = String(form.get("password") || "");
  }

  if (submitted !== password) {
    return NextResponse.redirect(new URL("/crm", req.url), 303);
  }

  const res = NextResponse.redirect(new URL("/crm", req.url), 303);
  setCrmSessionCookie(res, password);
  return res;
}

export async function DELETE() {
  const res = new NextResponse("logged out", { status: 200 });
  clearCrmSessionCookie(res);
  return res;
}
