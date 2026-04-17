'use client';
import styles from '../../home.module.css';

export default function BlogPost() {
  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>My First Blog Post</h1>
      <p className={styles.description}>
        This is a nested page inside the blog directory. 
        It demonstrates how Next.js handles multi-level routing.
      </p>
    </main>
  );
}