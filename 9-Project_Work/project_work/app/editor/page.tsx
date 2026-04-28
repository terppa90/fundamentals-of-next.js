'use client';
import { useState } from 'react';

export default function EditorPage() {
  const [text, setText] = useState<string>('');

  const toUpper = () => setText(text.toUpperCase());
  const toLower = () => setText(text.toLowerCase());
  const clearText = () => setText('');

  // Merkkien laskenta
  const charCount = text.length;
  // Sanojen laskenta
  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;

  return (
    <main className="p-8 max-w-2xl">
      <h1 className="text-2xl font-bold mb-4">Text Editor</h1>
      
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full h-48 border p-4 rounded text-black mb-4 focus:ring-2 focus:ring-blue-500 outline-none"
        placeholder="Type or paste your text here..."
      />

      <div className="flex flex-wrap gap-2 mb-6">
        <button 
          onClick={toUpper}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          UPPERCASE
        </button>
        <button 
          onClick={toLower}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
        >
          lowercase
        </button>
        <button 
          onClick={clearText}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Clear
        </button>
      </div>

      <div className="flex gap-6 p-4 bg-blue-50 rounded text-blue-900 border border-blue-100">
        <p><strong>Characters:</strong> {charCount}</p>
        <p><strong>Words:</strong> {wordCount}</p>
      </div>
    </main>
  );
}