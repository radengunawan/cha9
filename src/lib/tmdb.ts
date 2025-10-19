const BASE = 'https://api.themoviedb.org/3';

function authHeaders() {
  const token = process.env.TMDB_ACCESS_TOKEN!;
  if (!token) throw new Error('TMDB_ACCESS_TOKEN is missing');
  return { Authorization: `Bearer ${token}` };
}

// Helper that uses Next.js caching nicely.
// `revalidate` controls ISR/SSG freshness (in seconds).
export async function tmdb(path: string, { revalidate = 60 * 60 } = {}) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { ...authHeaders(), accept: 'application/json' },
    // Next.js caching hints:
    next: { revalidate },
  });
  if (!res.ok) {
    // (Bonus: log to an error service if you like)
    throw new Error(`TMDB error ${res.status}: ${await res.text()}`);
  }
  return res.json();
}

// Common endpoints:
export const getPopular = () =>
  tmdb('/movie/popular?language=en-US&page=1', { revalidate: 60 * 30 });
export const getById = (id: string) =>
  tmdb(`/movie/${id}?language=en-US`, { revalidate: 60 * 60 * 24 });
export const searchMoviesServer = (q: string, page = 1) =>
  tmdb(
    `/search/movie?query=${encodeURIComponent(
      q
    )}&include_adult=false&language=en-US&page=${page}`,
    {
      revalidate: 0, // searches should be fresh
    }
  );

export const getFeatured = async () => {
  const data = await tmdb('/movie/now_playing?language=en-US&page=1', {
    revalidate: 60 * 10,
  });
  return data.results?.[0];
};

// Image helpers:
export const img500 = (path?: string | null) =>
  path ? `https://image.tmdb.org/t/p/w500${path}` : '/placeholder.png';

// lib/tmdb.ts
export const getVideos = (id: number) =>
  tmdb(`/movie/${id}/videos?language=en-US`, { revalidate: 60 * 60 });
