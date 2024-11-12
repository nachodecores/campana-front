import React from "react";

export default function NewsCard({ titulo, descripcion, relevancia }) {
  // Ajuste de clases de tamaño según la relevancia
  const sizeClass =
    relevancia === "alta"
      ? "col-span-2 row-span-2 h-[17rem]" // Altura para 2 filas y el gap
      : relevancia === "media"
      ? "col-span-2 h-[8rem]" // Altura para media relevancia
      : "col-span-1 h-[8rem]"; // Altura estándar

  return (
    <div className={`bg-white p-4 shadow-md rounded-lg ${sizeClass}`}>
      <h2 className="text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
        {titulo}
      </h2>
      <p className="text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
        {descripcion}
      </p>
    </div>
  );
}
