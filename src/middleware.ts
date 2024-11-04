import { NextResponse } from "next/server";

import { auth as middleware } from "@/config/auth/auth";

const publicRoutes = ["/", "/signup"];

export default middleware((req) => {
  const isLogged = req.auth;
  console.log("Middleware Auth: ", isLogged);

  if (!publicRoutes.includes(req.nextUrl.pathname) && !isLogged) {
    return NextResponse.redirect(new URL("/", req.nextUrl.origin));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
