// src/components/Hero.tsx
import Image from 'next/image';
import Link from 'next/link';
import { img500 } from '@/lib/tmdb';

type Props = {
  movie: {
    id: number;
    title: string;
    overview: string;
    backdrop_path: string | null;
  };
};

export default function Hero({ movie }: Props) {
  return (
    <section className="relative">
      {/* Background poster */}
      <div className="absolute inset-0">
        <Image
          src={img500(movie.backdrop_path) || '/placeholder-wide.jpg'}
          alt={movie.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Left-to-right gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-transparent" />
        {/* Bottom vignette to blend into black content area */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/90 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {movie.title}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-gray-200/90 md:text-lg">
            {movie.overview}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`/movie/${movie.id}?play=trailer`}
              className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 font-semibold text-white shadow hover:bg-red-500"
            >
              <span>Watch Trailer</span>
              <span className="inline-block h-5 w-5 rounded-full bg-white/20 ring-1 ring-white/30">
                {/* fake play dot for look; you can swap with an icon */}
              </span>
            </Link>

            <Link
              href={`/movie/${movie.id}`}
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/15 hover:bg-white/15"
            >
              See Detail
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
