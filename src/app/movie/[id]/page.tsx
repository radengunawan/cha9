import Image from 'next/image';
import Link from 'next/link';
import { getById, img500 } from '@/lib/tmdb';

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props) {
  const movie = await getById(params.id);
  return {
    title: `${movie.title} (${movie.release_date?.slice(0, 4)}) | Movie`,
  };
}

export default async function MovieDetail({ params }: Props) {
  const movie = await getById(params.id);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <Link href="/" className="text-blue-600 hover:underline">
        &larr; Back
      </Link>

      <div className="mt-4 grid gap-6 md:grid-cols-[220px_1fr]">
        <div className="relative w-full aspect-[2/3] rounded-lg overflow-hidden bg-gray-100">
          <Image
            src={img500(movie.poster_path)}
            alt={movie.title}
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

          <div className="mt-6 text-sm text-gray-500">
            This product uses the TMDB API but is not endorsed or certified by
            TMDB.
          </div>
        </div>
      </div>
    </main>
  );
}
