'use client';

import { useEffect, useState } from 'react';
import MovieCard from './MovieCard';

export default function SearchBox() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!q.trim()) {
      setResults([]);
      return;
    }
    const id = setTimeout(async () => {
      setLoading(true);
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
      const data = await res.json();
      setResults(data.results || []);
      setLoading(false);
    }, 350); // debounce
    return () => clearTimeout(id);
  }, [q]);

  return (
    <div className="w-full sm:w-96">
      <input
        className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search movies…"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {q && (
        <div className="mt-3 rounded-xl border bg-white p-3 shadow max-h-[60vh] overflow-auto">
          {loading && (
            <div className="p-3 text-sm text-gray-500">Searching…</div>
          )}
          {!loading && results.length === 0 && (
            <div className="p-3 text-sm text-gray-500">No results.</div>
          )}
          <div className="grid grid-cols-2 gap-3">
            {results.map((m) => (
              <MovieCard key={m.id} movie={m} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
