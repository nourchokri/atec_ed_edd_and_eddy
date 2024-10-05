"use client";

import { useState } from "react";

export default function HomePage() {
  const [image, setImage] = useState<File | null>(null);
  const [report, setReport] = useState("");

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    const formData = new FormData();
    if (image) {
      formData.append("image", image);
    }

    const request = await fetch("/api/analysis", {
      method: "POST",
      body: formData,
    });

    if (request.ok) {
      const data = await request.text();
      setReport(data);
    } else {
      console.error("Failed to analyze image");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Landscape Analysis</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        <div>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Analyse
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
