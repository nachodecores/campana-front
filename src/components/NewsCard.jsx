import React from "react";
import { useRouter } from "next/navigation";

export default function NewsCard({ id, titulo, contenido, categoria, styles }) {
  const router = useRouter();
  console.log(styles.text);
  return (
    <div
      onClick={() => router.push(`/news/${id}`)}
      className={`bg-white p-4 shadow-md rounded-lg h-[10rem] cursor-pointer ${
        styles?.text || "text-gray-800"
      }`}
    >
      <h2
        className={`text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis ${
          styles?.text || "text-gray-800"
        }`}
      >
        {titulo}
      </h2>
      <p
        className={`${
          styles?.text || "text-gray-800"
        } overflow-hidden whitespace-nowrap text-ellipsis`}
      >
        {contenido}
      </p>
      {/* Elementos de depuración */}
      <p className="text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
        {styles?.text || "No styles.text found"}
      </p>
      <p className="text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
        {categoria}
      </p>
    </div>
  );
}
