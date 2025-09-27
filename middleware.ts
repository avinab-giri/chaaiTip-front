// middleware.ts (if it exists)
import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if this is redirecting everything to [username]
  console.log('Middleware hit:', request.nextUrl.pathname);
  return NextResponse.next();
}