import React, { useState, useEffect } from "react";
import Subscription from "./Subscription";
import UserForm from "./UserForm";
import CloseButton from "./CloseButton";

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
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-500 ease-in-out z-50 ${
        isScrolled ? "py-2 bg-colorBlue1 shadow-md" : "py-6 bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between max-w-6xl mx-auto px-6">
        <img
          src={
            isScrolled ? "logo_campana_claro.svg" : "/logo_campana_oscuro.svg"
          }
          alt="Logo"
          className={`transition-all duration-500 ${
            isScrolled ? "h-10 w-10" : "h-14 w-14"
          }`}
        />
        <div className={`ml-4 transition-opacity `}>
          {isScrolled ? (
            <h1 className="text-colorWhite1 text-4xl font-custom tracking-wide40">
              CAMPANA
            </h1>
          ) : (
            <h2 className="font-customBold tracking-wide40">
              <span className="font-bold">todas</span> las campanas en{" "}
              <span className="font-bold">una</span>
            </h2>
          )}
        </div>
        <div className="flex items-end">
          <img
            src={isScrolled ? "/user_logo_claro.svg" : "/user_logo.svg"}
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
          onClick={() => setShowSubscriptionModal(false)}
        >
          <div
            className="relative bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClose={() => setShowSubscriptionModal(false)} />
            <Subscription />
            <UserForm />
          </div>
        </div>
      )}
    </header>
  );
}
