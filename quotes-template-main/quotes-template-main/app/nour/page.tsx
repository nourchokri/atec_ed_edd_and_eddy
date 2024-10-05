"use client";

import { useState } from 'react';

export default function HomePage() {
  const [temperature, setTemperature] = useState('');
  const [humidity, setHumidity] = useState('');
  const [atmosphereComposition, setAtmosphereComposition] = useState('');
  const [soilQuality, setSoilQuality] = useState('');
  const [waterAvailability, setWaterAvailability] = useState('');
  const [radiationLevels, setRadiationLevels] = useState('');
  const [report, setReport] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted"); // Check if this is logged

    const response = await fetch('/api/generateReport', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        temperature,
        humidity,
        atmosphereComposition,
        soilQuality,
        waterAvailability,
        radiationLevels,
      }),
    });

    if (response.ok) {
      const data = await response.text();
      setReport(data);
    } else {
      console.error('Failed to generate report');
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Ecosystem Status Report Generator</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <textarea
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            placeholder="Enter Temperature (°C)"
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <div>
          <textarea
            value={humidity}
            onChange={(e) => setHumidity(e.target.value)}
            placeholder="Enter Humidity (%)"
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <div>
          <textarea
            value={atmosphereComposition}
            onChange={(e) => setAtmosphereComposition(e.target.value)}
            placeholder="Enter Atmosphere Composition"
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <div>
          <textarea
            value={soilQuality}
            onChange={(e) => setSoilQuality(e.target.value)}
            placeholder="Enter Soil Quality"
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <div>
          <textarea
            value={waterAvailability}
            onChange={(e) => setWaterAvailability(e.target.value)}
            placeholder="Enter Water Availability"
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <div>
          <textarea
            value={radiationLevels}
            onChange={(e) => setRadiationLevels(e.target.value)}
            placeholder="Enter Radiation Levels"
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Generate Report
        </button>
      </form>

      {report && (
        <div className="mt-4 p-4 border rounded-md bg-gray-100 text-gray-800">
          <h2 className="text-lg font-semibold">Generated Ecosystem Report:</h2>
          <pre className="whitespace-pre-wrap">{report}</pre>
        </div>
      )}
    </main>
  );
}
