// src/components/CloseButton.jsx
"use client";

import { useRouter } from "next/navigation";

export default function CloseButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
    >
      &times;
    </button>
  );
}
