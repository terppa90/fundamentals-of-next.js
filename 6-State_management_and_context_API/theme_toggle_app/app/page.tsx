'use client';

import { useTheme } from './contexts/ThemeContext';
import Link from "next/link";

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen transition-colors duration-500 ease-in-out p-6 text-center">
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Context API & State Management
        </h1>
        
        <p className="text-lg opacity-80 mb-8">
          Tämä sovellus demonstroi Next.js:n Context API:a ja globaalia tilanhallintaa. 
        </p>

        <button 
          onClick={toggleTheme}
          className={`
            px-8 py-3 rounded-full font-semibold text-lg shadow-lg
            transition-all duration-300 hover:scale-105 active:scale-95
            ${theme === 'light' 
              ? 'bg-gray-900 text-white hover:bg-gray-800' 
              : 'bg-yellow-400 text-gray-900 hover:bg-yellow-300'}
          `}
        >
          {theme === 'light' ? 'Switch to Dark' : 'Switch to Light'}
        </button>

        <div className="mt-12 pt-8 border-t border-gray-500/20">
          <Link 
            href="/about" 
            className="group inline-flex items-center gap-2 hover:underline font-medium"
          >
            Siirry About-sivulle 
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </main>
  );
}