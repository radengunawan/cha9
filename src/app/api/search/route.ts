import { NextResponse } from 'next/server';
import { searchMoviesServer } from '@/lib/tmdb';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q') || '';
  const page = Number(searchParams.get('page') ?? '1');

  if (!q.trim()) return NextResponse.json({ results: [] });

  const data = await searchMoviesServer(q, page);
  return NextResponse.json(data);
}
