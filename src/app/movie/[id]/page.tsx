import Image from 'next/image';
import Link from 'next/link';
import { getById, getVideos, img500 } from '@/lib/tmdb';
import { Movie, VideosResponse, Video } from '@/lib/types';

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props) {
  const movie: Movie = await getById(params.id);
  return {
    title: `${movie.title} (${movie.release_date?.slice(0, 4)}) | Movie`,
  };
}

export default async function MovieDetail({ params }: Props) {
  const movie = await getById(params.id);

  const vids: VideosResponse = await getVideos(movie.id);
  const trailer: Video | undefined = vids.results?.find(
    (v) => v.type === 'Trailer' && v.site === 'YouTube'
  );
  const trailerUrl = trailer
    ? `https://www.youtube.com/watch?v=${trailer.key}`
    : null;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline">
        &larr; Back
      </Link>

      <div className="mt-4 grid gap-6 md:grid-cols-[220px_1fr]">
        <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={img500(movie.poster_path)}
            alt={movie.title ?? 'Movie poster'}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="text-gray-600">
            {movie.release_date} • ⭐ {movie.vote_average} • {movie.runtime} min
          </p>

          <h2 className="mt-6 mb-2 font-semibold">Overview</h2>
          <p className="text-gray-800">
            {movie.overview || 'No overview available.'}
          </p>

          {/* 👇 Add this block for the trailer button */}
          {trailerUrl && (
            <div className="mt-6">
              <a
                href={trailerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow hover:bg-red-500"
              >
                ▶ Watch Trailer
              </a>
            </div>
          )}

          <div className="mt-6 text-sm text-gray-500">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </div>
        </div>
      </div>
    </main>
  );
}
