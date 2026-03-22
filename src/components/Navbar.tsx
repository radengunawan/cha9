// src/components/Navbar.tsx
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import MovieCard from './MovieCard';
import { Movie, Paginated } from '@/lib/types';

function SearchDropdown() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Debounced fetch
  useEffect(() => {
    if (!q.trim()) {
      setResults([]);
      setOpen(false);
      return;
    }
    const id = setTimeout(async () => {
      setLoading(true);
      setOpen(true);
      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`);
        const data: Paginated<Movie> = await res.json();
        setResults(data.results ?? []);
      } catch {
        setResults([]);
      } finally {
        setLoading(false);
      }
    }, 350);
    return () => clearTimeout(id);
  }, [q]);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={containerRef} className="relative ml-auto w-48 sm:w-72">
      {/* Input */}
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-gray-200 focus-within:border-white/40 focus-within:ring-1 focus-within:ring-white/20 transition">
        <svg width="14" height="14" viewBox="0 0 16 16" className="shrink-0 opacity-60">
          <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <path d="M10.5 10.5L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onFocus={() => q.trim() && setOpen(true)}
          placeholder="Search movies…"
          className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none"
        />
        {q && (
          <button
            onClick={() => { setQ(''); setOpen(false); setResults([]); }}
            className="shrink-0 opacity-50 hover:opacity-100 transition"
            aria-label="Clear"
          >
            ✕
          </button>
        )}
      </div>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full mt-2 right-0 w-80 sm:w-[420px] rounded-2xl border border-white/10 bg-gray-950/95 backdrop-blur shadow-2xl max-h-[70vh] overflow-y-auto z-50">
          {loading && (
            <p className="px-5 py-4 text-sm text-gray-400 animate-pulse">Searching…</p>
          )}
          {!loading && results.length === 0 && (
            <p className="px-5 py-4 text-sm text-gray-400">No results for &ldquo;{q}&rdquo;</p>
          )}
          {!loading && results.length > 0 && (
            <>
              <p className="px-4 pt-3 pb-1 text-xs text-gray-500 uppercase tracking-widest">
                Results
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-3">
                {results.slice(0, 9).map((m) => (
                  <div key={m.id} onClick={() => { setOpen(false); setQ(''); }}>
                    <MovieCard movie={m} />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 md:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-semibold text-white">
          <Image
            src="/movie_logo1.png"
            alt="Movie logo"
            width={28}
            height={28}
            className="rounded"
          />
          <span>Eka Movie Tracker</span>
        </Link>

        <SearchDropdown />
      </div>
    </nav>
  );
}
