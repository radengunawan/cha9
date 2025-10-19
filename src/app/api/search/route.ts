import { NextResponse } from 'next/server';
import { searchMoviesServer } from '@/lib/tmdb';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  if (!q) return NextResponse.json({ results: [] });
  const data = await searchMoviesServer(q);
  return NextResponse.json(data);
}
