'use client';
import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="p-4 mb-6 flex gap-4">
      <Link href="/" className="text-blue-600 hover:font-bold">
        Home
      </Link>
      <Link href="/about" className="text-blue-600 hover:font-bold">
        About
      </Link>
      <Link href="/blog/post" className="text-blue-600 hover:font-bold">
        Blog Post
      </Link>
    </nav>
  );
}