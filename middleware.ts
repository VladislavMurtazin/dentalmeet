import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PROTECTED = ["/dashboard", "/dashboard.html", "/analytics.json"];

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="DentalMeet Dashboard"',
    },
  });
}

export function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  if (!PROTECTED.some((p) => path === p || path.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const password = process.env.DASHBOARD_PASSWORD;
  if (!password) {
    return new NextResponse("Dashboard not configured", { status: 503 });
  }

  const auth = req.headers.get("authorization");
  const expected = `Basic ${Buffer.from(`admin:${password}`).toString("base64")}`;
  if (auth !== expected) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/dashboard.html", "/analytics.json"],
};
