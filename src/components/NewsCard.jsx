import React from "react";
import { useRouter } from "next/navigation";

export default function NewsCard({ id, titulo, version_corta }) {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/news/${id}`)}
      className="bg-white p-4 shadow-md rounded-lg h-[10rem] cursor-pointer"
    >
      <h2 className="text-xl font-semibold mb-2 overflow-hidden whitespace-nowrap text-ellipsis">
        {titulo}
      </h2>
      <p className="text-gray-600 overflow-hidden whitespace-nowrap text-ellipsis">
        {version_corta}
      </p>
    </div>
  );
}
