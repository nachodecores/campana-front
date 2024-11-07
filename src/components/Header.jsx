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
      <div className="flex items-center justify-center max-w-6xl mx-auto py-4 px-6">
        {isScrolled ? (
          <div
            className={`transition-opacity ease-in-out opacity-100 ml-0 md:ml-4 flex items-start`}
          >
            <img
              src="/logo-campana-oscuro.svg"
              alt="Logo"
              className="h-20 w-20"
            />
          </div>
        ) : (
          <h1
            className={`text-4xl font-bold transition-opacity duration-500 ease-in-out opacity-100`}
          >
            C A M P A N A
          </h1>
        )}
      </div>
    </header>
  );
}
