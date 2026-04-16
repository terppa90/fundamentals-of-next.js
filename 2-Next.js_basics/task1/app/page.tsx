'use client';
import Link from 'next/link';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Fundamentals of Next.js</h1>
      <p className={styles.description}>This is an application for studying Next.js</p>
      <Link href="/about" className="text-blue-500 hover:underline">
        Go to About Page
      </Link>
    </main>
  );
}
