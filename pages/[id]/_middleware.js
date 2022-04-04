import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req) {
  const url = req.nextUrl.clone()
  url.pathname = `/foo${url.pathname}`
  return NextResponse.rewrite(url)
}