// Next.js App Router API route
import { NextResponse } from 'next/server'

type Data = {
  name: string
}

export async function GET() {
  const data: Data = { name: 'John Doe' }
  return NextResponse.json(data)
}
