import { useEffect, useState } from 'react';

export default function UserCard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => setUser(data.name));
  }, []);

  if (!user) return <div>Loading...</div>;

  return <div>User: {user}</div>;
}