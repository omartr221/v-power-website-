import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, type Locale } from "./i18n/config";

const COOKIE_NAME = "NEXT_LOCALE";

function getPreferredLocale(req: NextRequest): Locale {
  const header = req.headers.get("accept-language");
  if (!header) return defaultLocale;
  const primary = header.split(",")[0].split(";")[0].split("-")[0].trim().toLowerCase();
  return primary === "en" ? "en" : defaultLocale;
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Let Next.js internals, API, CMS, and static files pass through.
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/admin") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(COOKIE_NAME)?.value as Locale | undefined;
  const preferred = cookie || getPreferredLocale(req);
  const isEnPath = pathname === "/en" || pathname.startsWith("/en/");

  let targetPath = pathname;

  if (preferred === "en") {
    if (!isEnPath) {
      targetPath = pathname === "/" ? "/en" : `/en${pathname}`;
    }
  } else {
    if (isEnPath) {
      targetPath = pathname === "/en" ? "/" : pathname.replace(/^\/en/, "") || "/";
    }
  }

  const response =
    targetPath === pathname
      ? NextResponse.next()
      : NextResponse.redirect(new URL(targetPath, req.url));

  // Vary the edge cache by language so English and Arabic visitors don't
  // accidentally share the same cached HTML.
  response.headers.set("Vary", "Accept-Language, Cookie");
  const netlifyVary = response.headers.get("Netlify-Vary") || "";
  if (!netlifyVary.includes("header=accept-language")) {
    response.headers.set(
      "Netlify-Vary",
      netlifyVary ? `${netlifyVary},header=accept-language` : "header=accept-language"
    );
  }

  if (!cookie) {
    response.cookies.set(COOKIE_NAME, preferred, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: ["/((?!_next|api|admin|.*\\..*).*)"],
};
