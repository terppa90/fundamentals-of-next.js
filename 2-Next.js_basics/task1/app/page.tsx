'use client';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>Fundamentals of Next.js</h1>
      <p>This is an application for studying Next.js</p>
      <Link href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </main>
  );
}
