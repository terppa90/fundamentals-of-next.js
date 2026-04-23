import styles from '../home.module.css';

// 1. STAATTINEN KOMPONENTTI (SSG/ISR)
// Tämä haetaan kerran buildissa tai revalidoidaan harvoin.
async function NewsSection() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3', {
    next: { revalidate: 60 }, // ISR: Päivitys minuutin välein
  });
  const posts = await res.json();

  return (
    <section style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
      <h2><strong>Uutiset (Staattinen/ISR)</strong></h2>
      <p>Päivittyy taustalla max 60s välein.</p>
      <ul>
        {posts.map((p) => <li key={p.id}>{p.title}</li>)}
      </ul>
    </section>
  );
}

// 2. DYNAAMINEN KOMPONENTTI (SSR)
// Tämä haetaan uudelleen jokaisella sivun latauksella.
async function UserDashboard() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users/2', {
    cache: 'no-store', // Ei välimuistia
  });
  const user = await res.json();
  const time = new Date().toLocaleTimeString('fi-FI');

  return (
    <section style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', marginTop: '20px' }}>
      <h2><strong>Käyttäjäpaneeli (Dynaaminen SSR)</strong></h2>
      <p>Tervetuloa takaisin, <strong>{user.name}</strong>!</p>
      <p style={{ color: '#0070f3' }}>Pyyntöaika: {time}</p>
    </section>
  );
}

// PÄÄSIVU
export default function HybridPage() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '600px' }}>
      <h1 className={styles.heading}>Hybrid Rendering Example</h1>
      
      <NewsSection />
      <UserDashboard />
    </main>
  );
}