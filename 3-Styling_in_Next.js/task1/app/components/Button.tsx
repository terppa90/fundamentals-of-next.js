import styles from './Button.module.css';

export default function Button({ label, onClick }) {
  return (
    <button className={styles.customButton} onClick={onClick}>
      {label}
    </button>
  );
}