import React, { useState, useEffect } from "react";
import Subscription from "./Subscription";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full transition-all duration-500 ease-in-out z-50">
      <div className="flex items-center justify-center max-w-6xl mx-auto py-4 px-6">
        {isScrolled ? (
          <div className="transition-opacity ease-in-out opacity-100 ml-0 md:ml-4 flex items-start">
            <img
              src="/logo-campana-oscuro.svg"
              alt="Logo"
              className="h-20 w-20"
            />
          </div>
        ) : (
          <div className="">
            <h2 className="font-bold transition-opacity duration-500 ease-in-out opacity-100 font-customBold tracking-wide40">
              <span className="">todas</span> las campanas en una
            </h2>
            <h1 className="text-4xl font-custom tracking-wide40">CAMPANA</h1>
          </div>
        )}
        <div className="transition-opacity ease-in-out opacity-100 ml-0 md:ml-4 flex items-end">
          <img
            src="/user_logo.svg"
            alt="User Icon"
            className="h-10 w-10 cursor-pointer"
            onClick={() => setShowSubscriptionModal(true)}
          />
        </div>
      </div>
      {/* Modal de Suscripción */}
      {showSubscriptionModal && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowSubscriptionModal(false)} // Cierra el modal al hacer clic en el fondo
        >
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal cierre el modal
          >
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setShowSubscriptionModal(false)}
            >
              &times;
            </button>
            <Subscription />
          </div>
        </div>
      )}
    </header>
  );
}
