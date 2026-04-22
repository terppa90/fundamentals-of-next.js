import { NextResponse } from 'next/server';

function isAuthenticated(req) {
  return req.headers.get('authorization') === 'Bearer token123';
}

export async function POST(req) {
    try {
        if (!isAuthenticated(req)) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        // Luetaan JSON-data
        const body = await req.json();
        const { name, message } = body;

        if (!body.name) {
            return NextResponse.json({ error: 'Name is required' }, { status: 400 });
        }

        if (!body.message) {
            return NextResponse.json({ error: 'Message is required' }, { status: 400 });
        }

        console.log("Uusi yhteydenotto:", { name, message });

        // Success response
        return NextResponse.json(
            { 
            message: "Kiitos viestistäsi! Se on vastaanotettu.",
            receivedData: { name, message } 
            }, 
            { status: 201 } // Created
        );

    } catch (error) {
        // Jos tapahtuu virhe, palautetaan virhekoodi 400
        return NextResponse.json(
            { error: "Virheellinen pyyntö." }, 
            { status: 400 }
        );
    }
}