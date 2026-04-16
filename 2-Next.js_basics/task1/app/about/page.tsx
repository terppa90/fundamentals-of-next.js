'use client';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <main>
        <h1>About this course</h1>
        <p>This is a Next.js fundamentals course from Metropolia</p>
        <Link href="/" className="text-blue-500 hover:underline">
          Back to Home
        </Link>
    </main>
  );
}