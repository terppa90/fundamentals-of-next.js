'use client';
import styles from './home.module.css';

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Fundamentals of Next.js</h1>
      <p className={styles.description}>This is an application for studying Next.js</p>
    </main>
  );
}
