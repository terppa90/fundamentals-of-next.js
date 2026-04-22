import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        // Luetaan JSON-data
        const body = await req.json();
        const { name, message } = body;

        console.log("Uusi yhteydenotto:", { name, message });

        // Success response
        return NextResponse.json(
            { 
            message: "Kiitos viestistäsi! Se on vastaanotettu.",
            receivedData: { name, message } 
            }, 
            { status: 200 } // OK
        );

    } catch (error) {
        // Jos tapahtuu virhe, palautetaan virhekoodi 400
        return NextResponse.json(
            { error: "Virheellinen pyyntö." }, 
            { status: 400 }
        );
    }
}