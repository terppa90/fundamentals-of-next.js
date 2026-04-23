'use client';

import { useTheme } from '../contexts/ThemeContext';
import Link from "next/link";

export default function AboutPage() {
    const { theme } = useTheme();

    return (
        <main className={`
            flex flex-col items-center justify-center min-h-screen 
            transition-colors duration-500 ease-in-out p-6 text-center`}>
            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                    Tietoa sovelluksesta
                </h1>
                
                <p className="text-lg opacity-80 mb-8 leading-relaxed">
                    Sivun taustaväri ja tekstin tyyli 
                    pysyvät samana kuin etusivulla, koska käytämme yhteistä Contextia.
                </p>

                <div className={`
                    p-6 rounded-2xl mb-8 transition-colors duration-500
                    ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-800'}
                `}>
                    <p className="text-md italic">
                    Context API mahdollistaa tilan jakamisen koko sovelluksen laajuisesti 
                    ilman, että meidän tarvitsee syöttää propsi jokaisen tason läpi.
                    </p>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-500/20">
                    <Link 
                    href="/" 
                    className="group inline-flex items-center gap-2 hover:underline font-medium"
                    >
                    <span className="transition-transform group-hover:-translate-x-1">←</span>
                    Takaisin etusivulle
                    </Link>
                </div>
            </div>
        </main>
    );
}