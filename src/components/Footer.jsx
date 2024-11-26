import React from "react";

export default function Footer() {
  return (
    <footer className="text-center mt-10 text-gray-600">
      <p>&copy; 2024 Campana. Todos los derechos reservados.</p>
      <a
        href="/run-scrapers"
        className="text-sm font-medium text-gray-700 hover:text-gray-900"
      >
        Panel de Control
      </a>
    </footer>
  );
}
