import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Run only where a redirect is needed: the root and unprefixed paths like /about.
  // Pages under /en and /ar are pre-built and served from the CDN, so the middleware
  // is skipped for them (it was running on every page view and prefetch).
  // Also skipped: /api, /trpc, /_next, /_vercel and paths with a dot (e.g. favicon.ico).
  matcher: ["/", "/((?!api|trpc|_next|_vercel|(?:en|ar)(?:/|$)|.*\\..*).*)"],
};
