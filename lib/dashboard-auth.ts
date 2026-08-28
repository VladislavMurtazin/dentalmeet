import { NextRequest, NextResponse } from "next/server";

export function dashboardAuth(req: NextRequest): NextResponse | null {
  const password = process.env.DASHBOARD_PASSWORD?.trim();
  if (!password) {
    return new NextResponse(
      "Dashboard not configured. Set DASHBOARD_PASSWORD in Vercel → Project → Settings → Environment Variables → Production, then redeploy.",
      { status: 503 },
    );
  }

  const auth = req.headers.get("authorization");
  const expected = `Basic ${Buffer.from(`admin:${password}`).toString("base64")}`;
  if (auth !== expected) {
    return new NextResponse("Authentication required", {
      status: 401,
      headers: {
        "WWW-Authenticate": 'Basic realm="DentalMeet Dashboard"',
      },
    });
  }

  return null;
}
