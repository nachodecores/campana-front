import React from "react";
import { useRouter } from "next/navigation";

export default function NewsCard({ id, titulo, descripcion, relevancia }) {
  const router = useRouter();

  // Ajuste de clases de tamaño según la relevancia
  const sizeClass =
    relevancia === "alta"
      ? "col-span-2 row-span-2 h-[17rem]"
      : relevancia === "media"
      ? "col-span-2 h-[8rem]"
      : "col-span-1 h-[8rem]";

  return (
    <div
      onClick={() => router.push(`/news/${id}`)}
      className={`bg-white p-4 shadow-md rounded-lg ${sizeClass} cursor-pointer`}
    >
      <h2 className="text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
        {titulo}
      </h2>
      <p className="text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
        {descripcion}
      </p>
    </div>
  );
}
