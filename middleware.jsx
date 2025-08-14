import { NextResponse } from "next/server";
import { cookies } from 'next/headers';

export function middleware(request) {
  const token = cookies().get("token")?.value;

  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/panel") && !token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/panel", request.url));
  }


  return NextResponse.next();
}


export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)", // همه مسیرها به جز فایل‌های استاتیک
  ],
};