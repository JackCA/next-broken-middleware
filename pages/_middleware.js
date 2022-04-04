import { NextRequest, NextResponse } from 'next/server'

export default function middleware(req) {
  const response =  NextResponse.next()
  return response
}