import { NextResponse } from 'next/server';

export async function GET() {
    return NextResponse.json({ name: 'Tero', age: 35 });
}