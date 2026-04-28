export default function Home() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      {/* Kurssin yhteenveto */}
      <header className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Next.js Course Final Project
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          This project marks the completion of the Next.js development course. 
          During the course, we explored the fundamentals of modern web development with Next.js, 
          including <strong>Styling in Next.js</strong>, the <strong>App Router</strong> architecture, <strong>Server and Client Components</strong>,
          <strong> State Management and Context API</strong> with React hooks, <strong>Testing with Jest and 
          Playwright</strong>, integrating <strong>External APIs</strong> and application <strong>Deployment & Optimization</strong>. 
          The project is styled using <strong>Tailwind CSS</strong> to ensure a responsive and clean user interface.
        </p>
      </header>

      {/* Kuvaukset näkymistä (views) */}
      <div className="grid gap-8">
        <h2 className="text-2xl font-bold text-gray-800">Project Overview</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Calculator */}
          <section className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Calculator</h3>
            <p className="text-sm text-gray-600 mb-4">
              A functional arithmetic tool for basic operations.
            </p>
            <div className="text-xs font-mono bg-gray-50 p-2 rounded">
              <strong>Implementation:</strong> Uses useState to manage numeric inputs and performs calculations via a switch-case logic.
            </div>
          </section>

          {/* Text Editor */}
          <section className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Text Editor</h3>
            <p className="text-sm text-gray-600 mb-4">
              A string manipulation tool with real-time stats.
            </p>
            <div className="text-xs font-mono bg-gray-50 p-2 rounded">
              <strong>Implementation:</strong> Utilizes JavaScript string methods for transformations and Regex for word/character counting.
            </div>
          </section>

          {/* Weather */}
          <section className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm">
            <h3 className="text-xl font-bold mb-2 text-blue-600">Weather API</h3>
            <p className="text-sm text-gray-600 mb-4">
              Real-time weather data fetcher.
            </p>
            <div className="text-xs font-mono bg-gray-50 p-2 rounded">
              <strong>Implementation:</strong> Uses asynchronous fetch calls to the Open-Meteo API, combining geocoding and weather data.
            </div>
          </section>
        </div>
      </div>

      <footer className="mt-16 pt-8 border-t text-center text-gray-500 text-sm">
        Next.js Final Project | 2026 | Tero Kaihula
      </footer>
    </main>
  );
}