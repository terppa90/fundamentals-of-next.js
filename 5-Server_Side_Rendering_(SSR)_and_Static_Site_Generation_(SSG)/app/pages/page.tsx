import styles from '../home.module.css';

export const revalidate = 10; // Sivu päivittyy aikaisintaan 10 sekunnin välein

export default async function BlogPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    // Arvotaan yksi postaus korostettavaksi, jotta näemme milloin sivu generoituu uudelleen
    const randomPost = posts[Math.floor(Math.random() * posts.length)];
    const timestamp = new Date().toLocaleTimeString('fi-FI', { 
        second: '2-digit', 
        fractionalSecondDigits: 2 
    });

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

            <h1>ISR Testisivu</h1>

            <div style={{ background: '#f0f0f0', padding: '15px', borderRadius: '8px' }}>
                <p>Generointiaika: <strong>{timestamp}</strong></p>
                <p>Random post: <em>{randomPost.title}</em></p>
            </div>
        </main>
    );
}

/*
Tämän joutui testaamaan buildatussa versiossa (npm run build, npm start), 
ei toiminut kehitysympäristössä.
*/