'use client';
import styles from '../home.module.css';

export default function AboutPage() {
  return (
    <main className={styles.container}>
        <h1 className={styles.heading}>About this course</h1>
        <p className={styles.description}>This is a Next.js fundamentals course from Metropolia</p>
    </main>
  );
}