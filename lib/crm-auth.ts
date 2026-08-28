import { NextRequest, NextResponse } from "next/server";

/** Basic Auth (admin + CRM_PASSWORD) or ?token=CRM_ACCESS_TOKEN */
export function crmAuth(req: NextRequest): NextResponse | null {
  const password = process.env.CRM_PASSWORD?.trim();
  const accessToken = process.env.CRM_ACCESS_TOKEN?.trim();

  if (!password && !accessToken) {
    return new NextResponse(
      "CRM not configured. Set CRM_PASSWORD and/or CRM_ACCESS_TOKEN in Vercel → Project → Settings → Environment Variables → Production, then redeploy.",
      { status: 503 },
    );
  }

  const urlToken = req.nextUrl.searchParams.get("token")?.trim();
  if (accessToken && urlToken === accessToken) {
    return null;
  }

  if (password) {
    const auth = req.headers.get("authorization");
    const expected = `Basic ${Buffer.from(`admin:${password}`).toString("base64")}`;
    if (auth === expected) {
      return null;
    }
  }

  if (accessToken && !password) {
    return new NextResponse("Invalid or missing token. Use /crm?token=...", {
      status: 401,
    });
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="DentalMeet CRM"',
    },
  });
}
