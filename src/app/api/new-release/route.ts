import { NextResponse } from 'next/server';
import { getNewReleases } from '@/lib/tmdb';
import { Paginated, Movie } from '@/lib/types';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = Number(searchParams.get('page') ?? '1');
  const data: Paginated<Movie> = await getNewReleases(page);
  return NextResponse.json(data);
}
