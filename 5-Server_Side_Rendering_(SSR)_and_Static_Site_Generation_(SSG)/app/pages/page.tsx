import styles from '../home.module.css';

export const revalidate = 60; //60 sek

export default async function BlogPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  });
    const posts = await response.json();

    const timestamp = new Date().toLocaleTimeString('fi-FI');

    return (
        <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1 className={styles.heading}>Blogipostaukset</h1>

            <p style={{ color: 'gray' }}>Päivitetty viimeksi: {timestamp}</p>

            <ul>
            {posts.slice(0, 10).map((post) => (
                <li key={post.id} style={{ marginBottom: '10px' }}>
                <strong>{post.title}</strong>
                </li>
            ))}
            </ul>
        </main>
    );
}