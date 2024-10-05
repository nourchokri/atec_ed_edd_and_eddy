"use client";

import { useState } from 'react';

export default function HomePage() {
  // State to hold the message input
  const [message, setMessage] = useState('');
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
        message
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
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Ask a question"
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Get response
        </button>
      </form>

      {report && ( // Display area for the generated report if it's not empty
        <div className="mt-4 p-4 border rounded-md bg-gray-100 text-gray-800">
          <h2 className="text-lg font-semibold">Submitted:</h2>
          <pre className="whitespace-pre-wrap">{message}</pre> {/* Preserve formatting */}
        </div>
      )}
    </main>
  );
}
