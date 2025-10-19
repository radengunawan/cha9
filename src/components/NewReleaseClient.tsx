// src/components/NewReleaseClient.tsx
'use client';

import { useState } from 'react';
import NewReleaseCard from './NewReleaseCard';

export default function NewReleaseClient({
  initial,
  totalPages,
}: {
  initial: any[];
  totalPages: number;
}) {
  const [items, setItems] = useState<any[]>(initial);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading || page >= totalPages) return;
    setLoading(true);
    const next = page + 1;
    const res = await fetch(`/api/new-release?page=${next}`, {
      cache: 'no-store',
    });
    const data = await res.json();
    setItems((prev) => [...prev, ...(data.results ?? [])]);
    setPage(next);
    setLoading(false);
  };

  return (
    <>
      {/* grid */}
      <div
        className="mt-4 grid gap-6
        grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6"
      >
        {items.map((m) => (
          <NewReleaseCard key={`${m.id}-${m.poster_path}`} m={m} />
        ))}
      </div>

      {/* load more */}
      {page < totalPages && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="rounded-full bg-white/10 px-6 py-3 text-white ring-1 ring-white/15 hover:bg-white/15 disabled:opacity-60"
          >
            {loading ? 'Loading…' : 'Load More'}
          </button>
        </div>
      )}
    </>
  );
}
