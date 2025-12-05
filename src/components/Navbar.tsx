import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/40 backdrop-blur supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-7xl items-center gap-6 px-4 py-4 md:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-white"
        >
          <Image
            src="/movie_logo1.png" // path inside /public
            alt="Movie logo"
            width={28}
            height={28}
            className="rounded"
          />
          <span>Eka Movie Tracker</span>
        </Link>

        {/* <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="/">Home</Link>
          <Link href="/favorites">Favorites</Link>
        </div> */}

        {/* <div className="ml-auto w-48 sm:w-72">
          <div className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-200 focus-within:ring-2 focus-within:ring-white/20">
            <svg width="16" height="16" className="opacity-60">
              <circle cx="7" cy="7" r="6" stroke="currentColor" fill="none" />
              <path d="M11 11l3 3" stroke="currentColor" />
            </svg>
            <input
              placeholder="Search Movie"
              className="w-full bg-transparent placeholder:text-gray-400 focus:outline-none"
            />
          </div>
        </div> */}
      </div>
    </nav>
  );
}
