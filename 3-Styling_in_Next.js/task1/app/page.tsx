'use client';
import styles from './home.module.css';
import Title from './components/Title';
import Button from './components/Button';

export default function Home() {
  const handleClick = () => {
    alert('Button clicked!');
  };
  
  return (
    <main className={styles.container}>
      <Title text="Fundamentals of Next.js" />
      <p className={styles.description}>This is an application for studying Next.js</p>

      <Button label="Click Me!" onClick={handleClick} />
    </main>
  );
}
