'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [msg, setMsg] = useState('');

  const sendForm = async (e) => {
    e.preventDefault();
    
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({ name, message: msg }),
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer token123' 
      }
    });

    const data = await response.json();
    alert(data.message || data.error);
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4">
        <form onSubmit={sendForm} className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-white p-8 shadow-lg border border-gray-100">
            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">Nimi</label>
                <input 
                type="text"
                placeholder="Oma nimesi" 
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-black"
                onChange={e => setName(e.target.value)} 
                value={name}
                />
            </div>

            <div className="flex flex-col gap-1">
                <label className="text-sm font-semibold text-gray-600">Viesti</label>
                <textarea 
                placeholder="Kirjoita viestisi tähän..." 
                className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all min-h-[120px] resize-none text-black"
                onChange={e => setMsg(e.target.value)} 
                value={msg}
                />
            </div>

            <button type="submit" className="mt-2 w-full rounded-lg bg-blue-600 p-3 font-bold text-white hover:bg-blue-700 active:scale-[0.98] transition-all">
                Lähetä viesti
            </button>
        </form>
    </div>
  );
}