// src/components/NewReleaseSection.tsx
import { getNewReleases } from '@/lib/tmdb';
import NewReleaseClient from './NewReleaseClient';

export default async function NewReleaseSection() {
  const data = await getNewReleases(1);
  const firstPage = data.results ?? [];
  const totalPages = Math.min(data.total_pages ?? 1, 5); // keep it sane

  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-8 md:px-8">
      <h2 className="text-2xl font-bold text-white">New Release</h2>
      <NewReleaseClient initial={firstPage} totalPages={totalPages} />

      {/* bottom vignette like the mock */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
