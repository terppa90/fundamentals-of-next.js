import { NextResponse } from 'next/server';

// Kopioidaan sama taulukko testausta varten
const users = [
  { id: 1, name: "Tero Testaaja", email: "tero@example.com" },
  { id: 2, name: "Erkki Esimerkki", email: "erkki@example.com" }
];

export async function GET(req, { params }) {
  const { id } = await params;
  
  // Etsitään käyttäjä id:n perusteella
  const user = users.find(u => u.id === parseInt(id));

  if (!user) {
    return NextResponse.json({ error: "Käyttäjää ei löytynyt" }, { status: 404 });
  }

  return NextResponse.json(user);
}