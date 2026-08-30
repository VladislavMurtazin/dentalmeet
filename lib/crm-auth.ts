import crypto from "crypto";

import { NextRequest, NextResponse } from "next/server";

const COOKIE = "crm_session";

function sessionToken(password: string): string {
  return crypto.createHmac("sha256", password).update("dentalmeet-crm").digest("hex");
}

/** Basic Auth, session cookie, or ?token=CRM_ACCESS_TOKEN */
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
    const cookie = req.cookies.get(COOKIE)?.value;
    if (cookie && cookie === sessionToken(password)) {
      return null;
    }
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

  // HTML login page for browsers
  const accept = req.headers.get("accept") || "";
  if (accept.includes("text/html") && req.nextUrl.pathname === "/crm") {
    return new NextResponse(loginPage(), {
      status: 401,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="DentalMeet CRM"',
    },
  });
}

export function setCrmSessionCookie(res: NextResponse, password: string): void {
  res.cookies.set(COOKIE, sessionToken(password), {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 14,
  });
}

export function clearCrmSessionCookie(res: NextResponse): void {
  res.cookies.set(COOKIE, "", { httpOnly: true, path: "/", maxAge: 0 });
}

function loginPage(): string {
  return `<!DOCTYPE html>
<html lang="en"><head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="robots" content="noindex,nofollow"/>
<title>CRM Login</title>
<style>
body{font-family:system-ui,sans-serif;background:#0b1220;color:#e8eef7;min-height:100vh;display:flex;align-items:center;justify-content:center}
form{background:#1a2332;border:1px solid #2d3a4f;border-radius:12px;padding:2rem;width:min(360px,92vw)}
h1{font-size:1.2rem;margin:0 0 1rem}
input{width:100%;padding:.65rem .75rem;border-radius:8px;border:1px solid #2d3a4f;background:#0b1220;color:#e8eef7;margin-bottom:1rem}
button{width:100%;padding:.7rem;border:0;border-radius:8px;background:#3b82f6;color:#fff;font-weight:600;cursor:pointer}
.err{color:#fecaca;font-size:.85rem;margin-bottom:.75rem}
</style></head><body>
<form method="POST" action="/crm/login">
  <h1>DentalMeet CRM</h1>
  <p class="err">Password required</p>
  <input type="password" name="password" placeholder="CRM password" required autofocus/>
  <button type="submit">Sign in</button>
</form>
</body></html>`;
}
