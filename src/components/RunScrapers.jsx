"use client";

import { useRouter } from "next/navigation";

export default function RunScrapers({ onRunScrapers, loading, message }) {
  const router = useRouter();

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Ejecutar Scrapers</h2>
      <button
        onClick={onRunScrapers}
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
      <button
        onClick={() => router.push("/")}
        className="w-full mt-4 px-4 py-2 font-semibold text-white bg-gray-500 rounded-lg hover:bg-gray-600"
      >
        Volver a la página principal
      </button>
    </div>
  );
}
