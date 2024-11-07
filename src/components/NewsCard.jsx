import React from "react";

export default function NewsCard({ titulo, descripcion, relevancia }) {
  // Ajuste de clases según la relevancia
  const sizeClass =
    relevancia === "alta"
      ? "col-span-2 row-span-2 h-64 w-full md:h-[16rem] md:w-[16rem]" // cuadrado para mayor relevancia
      : relevancia === "media"
      ? "col-span-2 h-40" // más ancho para media relevancia
      : "col-span-1 h-32"; // tamaño pequeño para menor relevancia

  return (
    <div className={`bg-white p-4 shadow-md rounded-lg ${sizeClass}`}>
      <h2 className="text-xl font-semibold mb-2">{titulo}</h2>
      <p className="text-gray-600">{descripcion}</p>
    </div>
  );
}
