// src/components/NewReleaseCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { img500 } from '@/lib/tmdb';
import { Movie } from '@/lib/types';

export default function NewReleaseCard({ m }: { m: Movie }) {
  const title = m.title ?? m.name ?? 'Untitled';
  const rating =
    typeof m.vote_average === 'number' ? m.vote_average.toFixed(1) : '—';
  return (
    <Link
      href={`/movie/${m.id}`}
      className="group block rounded-2xl bg-white/5 ring-1 ring-white/10 hover:bg-white/7.5 hover:ring-white/20 shadow-sm transition"
    >
      <div className="relative aspect-[2/3] overflow-hidden rounded-2xl m-2">
        <Image
          src={img500(m.poster_path) || '/placeholder.png'}
          alt={title}
          fill
          sizes="(max-width:768px) 50vw, (max-width:1200px) 25vw, 20vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>

      <div className="px-3 pb-3">
        <p className="mt-1 line-clamp-1 font-medium text-white">{title}</p>
        <p className="mt-1 flex items-center gap-1 text-sm text-gray-300/90">
          {/* tiny star */}
          <svg width="14" height="14" viewBox="0 0 24 24" className="shrink-0">
            <path
              fill="currentColor"
              d="M12 17.3l-6.18 3.64L7.2 14.4 2 9.77l6.91-1.01L12 2.5l3.09 6.26L22 9.77l-5.2 4.63 1.38 6.54z"
            />
          </svg>
          {rating}/10
        </p>
      </div>
    </Link>
  );
}
