import { client } from '@/lib/sanity/client';
import { NextResponse } from 'next/server';

export async function GET() {
  const result = await client.fetch(`*[]`);
  console.log('GROQ TEST RESULT:', result);

  return NextResponse.json({
    success: true,
    resultLength: result.length,
  });
}
