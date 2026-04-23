import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
    const { id } = await params; // Tässä käytetty await, koska Next.js 15 -versiosta alkaen params on muuttunut asynkroniseksi.

    const product = {
        id: id,
        name: `Työkalu #${id}`,
        price: 49.90,
        description: "Tämä tuote on haettu dynaamisesti id:n perusteella."
    };

    return NextResponse.json(product);
}