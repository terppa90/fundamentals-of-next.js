'use client';
import { useState } from 'react';

export default function CalculatorPage() {
  const [num1, setNum1] = useState<number | string>('');
  const [num2, setNum2] = useState<number | string>('');
  const [result, setResult] = useState<number | string>(0);

  const calculate = (operator: string) => {
    // Muunnetaan arvot numeroiksi. Jos kenttä on tyhjä (''), käytetään nollaa (0).
    const n1 = Number(num1) || 0;
    const n2 = Number(num2) || 0;

    switch (operator) {
        case '+': setResult(n1 + n2); break;
        case '-': setResult(n1 - n2); break;
        case '*': setResult(n1 * n2); break;
        case '/': 
        setResult(n2 !== 0 ? n1 / n2 : 'Error (div by 0)'); // Nollalla ei voi jakaa
        break;
    }
  };

  // Tyhjennetään input kentät ja result
  const reset = () => {
    setNum1('');
    setNum2('');
    setResult(0);
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Calculator</h1>
      <div className="flex flex-col gap-4 w-64">
        <input 
          type="number" 
          value={num1} 
          onChange={(e) => setNum1(e.target.value)}
          className="border p-2 rounded text-black"
          placeholder="0"
        />
        <input 
          type="number" 
          value={num2} 
          onChange={(e) => setNum2(e.target.value)}
          className="border p-2 rounded text-black"
          placeholder="0"
        />
        <div className="flex gap-2">
          {['+', '-', '*', '/'].map((op) => (
            <button 
              key={op}
              onClick={() => calculate(op)}
              className="bg-blue-500 text-white p-2 rounded w-full hover:bg-blue-600"
            >
              {op}
            </button>
          ))}
        </div>

        <button onClick={reset} className="bg-red-500 text-white p-2 rounded hover:bg-red-600 mt-2 transition-colors">
            Clear All
        </button>

        <h2 className="text-xl mt-4">Result: {result}</h2>
      </div>
    </main>
  );
}