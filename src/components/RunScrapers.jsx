import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function RunScrapers() {
  const [loading, setLoading] = useState(false); // Estado local
  const [message, setMessage] = useState(""); // Estado local
  const router = useRouter();

  const runScrapers = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/run-scrapers", { method: "POST" });
      const data = await response.json();
      setMessage(data.message || "Scrapers ejecutados con éxito.");
    } catch (error) {
      setMessage("Error al ejecutar los scrapers.");
    } finally {
      setLoading(false);
    }
  };

  const consolidateNews = async () => {
    setLoading(true);
    setMessage("");
    try {
      const response = await fetch("/api/consolidate-news", { method: "POST" });
      const data = await response.json();
      setMessage(data.message || "Consolidación completada con éxito.");
    } catch (error) {
      setMessage("Error al consolidar noticias.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        Ejecutar Scrapers y Consolidar Noticias
      </h1>
      <button
        onClick={runScrapers}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Ejecutando scrapers..." : "Ejecutar Scrapers"}
      </button>
      <br />
      <button
        onClick={consolidateNews}
        className="bg-green-500 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Consolidando noticias..." : "Consolidar Noticias"}
      </button>
      <p className="mt-4 text-gray-700">{message}</p>
    </div>
  );
}
