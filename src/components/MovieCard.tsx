import Image from 'next/image';
import Link from 'next/link';
import { img500 } from '@/lib/tmdb';
import { Movie } from '@/lib/types';

// type Movie = {
//   id: number;
//   title?: string;
//   name?: string; // (TV sometimes uses name)
//   poster_path: string | null;
//   release_date?: string;
//   vote_average?: number;
// };

export default function MovieCard({ movie }: { movie: Movie }) {
  const title = movie.title || movie.name || 'Untitled';

  return (
    <Link
      href={`/movie/${movie.id}`}
      className="group rounded-xl overflow-hidden bg-transparent shadow hover:shadow-lg transition"
    >
      <div className="relative aspect-[2/3] bg-gray-100">
        <Image
          src={img500(movie.poster_path)}
          alt={title}
          fill
          sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 20vw"
          className="object-cover group-hover:scale-[1.02] transition"
          priority={false}
        />
      </div>
      <div className="p-3">
        <h3 className="line-clamp-2 font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">
          {movie.release_date?.slice(0, 4) ?? '—'} · ⭐{' '}
          {movie.vote_average?.toFixed(1) ?? '—'}
        </p>
      </div>
    </Link>
  );
}
