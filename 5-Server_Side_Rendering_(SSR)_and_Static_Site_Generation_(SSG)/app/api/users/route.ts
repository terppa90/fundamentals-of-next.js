import { NextResponse } from 'next/server';

const users = [
  { id: 1, name: "Tero Testaaja", email: "tero@example.com" },
  { id: 2, name: "Erkki Esimerkki", email: "erkki@example.com" }
];

export async function GET() {
  return NextResponse.json(users);
}

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    // Validointi
    if (!name || !email) {
      return NextResponse.json({ error: "Nimi ja sähköposti vaaditaan" }, { status: 400 });
    }

    // Luodaan uusi käyttäjä
    const newUser = {
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
      name,
      email
    };

    users.push(newUser); // Lisätään taulukkoon

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Virheellinen pyyntö" }, { status: 400 });
  }
}