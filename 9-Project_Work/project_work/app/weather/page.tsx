'use client';
import { useState } from 'react';

export default function WeatherPage() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    setWeather(null);

    try {
      // Käytetään Geocoding API:a, jotta löydetään koordinaatit kaupungin nimen perusteella
      const geoRes = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
      const geoData = await geoRes.json();

      if (!geoData.results || geoData.results.length === 0) {
        throw new Error('City not found'); // Virheilmoitus, jos kaupunkia ei löytynyt
      }

      const { latitude, longitude, name, country } = geoData.results[0];

      // Käytetään koordinaatteja säätietojen lataamiseen
      const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const weatherData = await weatherRes.json();

      setWeather({
        name: name,
        country: country,
        temp: weatherData.current_weather.temperature,
        wind: weatherData.current_weather.windspeed
      });
    } catch (err) {
      setError('Failed to fetch weather. Please try again.'); // Virheilmoitus, jos lataaminen epäonnistuu
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-8 max-w-md">
      <h1 className="text-2xl font-bold mb-4">Weather Forecast</h1>
      <div className="flex gap-2 mb-6">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className="border p-2 rounded text-black flex-grow outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button 
          onClick={fetchWeather}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
        >
          Search
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-500 font-medium">{error}</p>}

      {weather && (
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
          <h2 className="text-xl font-bold text-blue-900 mb-1">{weather.name}, {weather.country}</h2>
          <div className="flex items-end gap-2 mb-4">
            <span className="text-5xl font-black text-blue-600">{weather.temp}°C</span>
          </div>
          <div className="text-blue-800 space-y-1">
            <p className="flex items-center gap-2">
              <span className="font-semibold">Wind Speed:</span> {weather.wind} m/s
            </p>
          </div>
        </div>
      )}
    </main>
  );
}