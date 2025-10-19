import { NextResponse } from 'next/server';
// import { searchMoviesServer } from '@/lib/tmdb';
import { getNewReleases } from '@/lib/tmdb';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? '1');
  const q = searchParams.get('q') || '';
  if (!q) return NextResponse.json({ results: [] });
  // const data = await searchMoviesServer(q);
  const data = await getNewReleases(page);
  return NextResponse.json(data);
}
