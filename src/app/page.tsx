import MovieCard from '@/components/MovieCard';
import { getPopular } from '@/lib/tmdb';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SearchBox from '@/components/SearchBox';

export const metadata = {
  title: 'Movies | Popular',
  description: 'Popular movies via TMDB',
};

export default async function HomePage() {
  const data = await getPopular();
  const movies = data.results ?? [];

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <header className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Popular Moviez</h1>
          <p className="text-gray-600">
            Powered by TMDB • not endorsed by TMDB
          </p>
        </div>
        <SearchBox />
      </header>

      <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {movies.map((m: any) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </section>
    </main>
  );
}
