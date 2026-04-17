import styles from './AppLayout.module.css';

export default function AppLayout({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.contentArea}>
        {children}
      </div>
    </div>
  );
}