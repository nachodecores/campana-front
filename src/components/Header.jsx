import React, { useState, useEffect } from "react";

export default function Header() {
  // Estado para controlar la visibilidad del título o logo
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full transition-all duration-500 ease-in-out z-50">
      <div className="flex items-center justify-center md:justify-start max-w-6xl mx-auto py-4 px-6">
        {/* Título "CAMPANA" centrado */}
        <h1
          className={`text-4xl font-bold transition-opacity duration-500 ease-in-out ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
        >
          CAMPANA
        </h1>

        {/* Logo a la izquierda cuando se hace scroll */}
        <div
          className={`transition-opacity ease-in-out ${
            isScrolled ? "opacity-100 ml-0 md:ml-4" : "opacity-0"
          }`}
        >
          <img
            src="/logo-campana-oscuro.svg"
            alt="Logo"
            className="h-20 w-20"
          />
        </div>
      </div>
    </header>
  );
}
