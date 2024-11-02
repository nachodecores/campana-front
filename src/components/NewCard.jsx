import React from "react";

export default function NewsCard({ titulo, descripcion, enlace }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full">
      <div className="p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{titulo}</h2>
        <p className="text-gray-600 mb-4">{descripcion}</p>
        <a href={enlace} className="text-blue-500 hover:underline">
          Leer más
        </a>
      </div>
    </div>
  );
}
