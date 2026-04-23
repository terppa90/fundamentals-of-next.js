export default async function ProfilePage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1', {
        cache: 'no-store'
    });
    const user = await response.json();

    return (
        <main style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
            <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '20px', maxWidth: '400px' }}>
                <p>Tervetuloa, <strong>{user.name}</strong>!</p>
                
                <hr />
                
                <p style={{ fontSize: '0.8rem', color: '#666' }}>
                    Sähköposti: {user.email}<br />
                    Kaupunki: {user.address.city}
                </p>
            </div>
        </main>
    );
}