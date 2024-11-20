"use client";

import { useState } from "react";

export default function RunScrapersPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleRunScrapers = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/run-scrapers", {
        method: "POST",
      });

      if (!response.ok) {
        throw new Error("Error al ejecutar los scrapers");
      }

      const data = await response.json();
      setMessage(data.message || "Scrapers ejecutados correctamente.");
    } catch (error) {
      setMessage("Error: No se pudo ejecutar los scrapers.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ejecutar Scrapers</h2>
      <button
        onClick={handleRunScrapers}
        disabled={loading}
        className={`w-full px-4 py-2 font-semibold text-white rounded-lg ${
          loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        {loading ? "Ejecutando..." : "Correr Scrapers"}
      </button>
      {message && (
        <p className="mt-4 text-center text-sm text-gray-700">{message}</p>
      )}
    </div>
  );
}
