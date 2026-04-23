import styles from '../home.module.css';

export default async function BlogPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    return (
        <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
            <h1 className={styles.heading}>Blogipostaukset</h1>

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