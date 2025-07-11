import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get('url');
  
  if (!url) {
    return NextResponse.json({ error: 'Missing or invalid magic link' }, { status: 400 });
  }
  
  // Redirect the browser straight on to the Supabase URL
  return NextResponse.redirect(decodeURIComponent(url), 302);
} 