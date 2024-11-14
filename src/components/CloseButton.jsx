// src/components/CloseButton.jsx
"use client";

import { useRouter } from "next/navigation";

export default function CloseButton({ onClose }) {
  const router = useRouter();

  const handleClick = () => {
    if (onClose) {
      onClose(); // Usa la función de cierre pasada por props si está disponible
    } else {
      router.back(); // Si no hay onClose, vuelve atrás
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
    >
      &times;
    </button>
  );
}
