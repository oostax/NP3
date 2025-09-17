import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Remove CSP only for the 404 route to allow external scene scripts
  if (request.nextUrl.pathname === '/404') {
    response.headers.delete('Content-Security-Policy');
  }

  return response;
}

export const config = {
  matcher: ['/404'],
};
