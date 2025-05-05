import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    // console.log("Middleware is running");
    // console.log("Path:", request.nextUrl.pathname);
    // console.log(request.headers);

    // Add your middleware here
    return NextResponse.next();
}

// Optional: Configure which paths this middleware runs on
export const config = {
    // matcher: ["/dashboard/:path*", "/programs/:path*"],
    // matcher: ["/((?!login|register).*)"],
    matcher: ["/((?!/).*)"],
};
