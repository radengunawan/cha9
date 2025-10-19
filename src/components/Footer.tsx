// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-8">
        <Link href="/" className="flex items-center gap-2 text-white">
          <div className="h-6 w-6 rounded bg-white" />
          <span>Movie</span>
        </Link>
        <p className="text-sm text-gray-400">
          Copyright ©{new Date().getFullYear()} Movie Explorer
        </p>
      </div>
    </footer>
  );
}
