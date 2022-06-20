import { NextResponse } from 'next/server'

export default function middleware(req) {
  if (req.nextUrl.pathname === '/') {
    return NextResponse.next()
  }
  const url = req.nextUrl.clone()
  url.pathname = `/foo${url.pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/', '/:path'],
}
