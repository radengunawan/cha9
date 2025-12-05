import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <Image
            src="/movie_logo1.png"
            alt="Movie logo"
            width={28}
            height={28}
            className="rounded"
          />
          <span>Movie</span>
        </Link>
        <p className="text-sm text-gray-400">
          Copyright ©{new Date().getFullYear()} by Eka Gunawan
        </p>
      </div>
    </footer>
  );
}
