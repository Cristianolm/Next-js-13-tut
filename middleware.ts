import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("nextjs-con-de-tuti", "Buenas-buenas-mi-gente");

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });

  if (request.nextUrl.pathname.endsWith("/information")) {
    return NextResponse.redirect(
      new URL("/information/characters", request.url)
    );
  }

  if (request.nextUrl.pathname.startsWith("/information")) {
    const user = {
      name: "John Doe",
      authenticated: process.env.NEXT_PUBLIC_AUTHENTICATED,
    };
    if (user.authenticated !== "true") {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return response;
}

// Apply middleware only to the path that matches the "matcher" in its first index; the second index represents the exceptions that are not considered.
export const config = {
  matcher: [
    "/information/:path*",
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
  //   matcher: ["/information/characters"],
};

// "100 10 1".match(/\d0*/g) 100, 10, 1
// "100 10 1".match(/\d0+/g) 100, 10
