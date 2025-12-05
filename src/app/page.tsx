// src/app/page.tsx
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MovieCard from '@/components/MovieCard';
import { getFeatured, getPopular } from '@/lib/tmdb';
import NewReleaseSection from '@/components/NewReleaseSection';
import Footer from '@/components/Footer';
import { Paginated, Movie } from '@/lib/types';

export default async function HomePage() {
  const featured = await getFeatured(); // hero movie
  const popular: Paginated<Movie> = await getPopular();
  const movies: Movie[] = popular.results ?? [];

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero movie={featured} />

      {/* “Trending Now” section header */}
      <section className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mt-6 text-2xl font-bold">Trending Now</h2>

        {/* horizontal carousel look (simple scroll for now) */}
        <div className="mt-4 grid grid-flow-col auto-cols-[56%] gap-4 overflow-x-auto sm:auto-cols-[32%] md:auto-cols-[22%] lg:auto-cols-[18%] pb-4">
          {movies.slice(0, 12).map((m: any) => (
            <MovieCard key={m.id} movie={m} />
          ))}
        </div>
        
        <div className="min-h-screen bg-black text-white">
          <NewReleaseSection />
          <Footer />
        </div>
      </section>
    </div>
  );
}
