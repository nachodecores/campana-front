// src/components/Subscription.js
import React, { useState } from "react";

export default function Subscription() {
  const [plan, setPlan] = useState("monthly"); // Plan por defecto (mensual)

  const handleSubscribe = () => {
    // Redirige al usuario al proceso de pago o suscripción
    // Aquí puedes iniciar el flujo de pago con Stripe u otra lógica
    alert(`Suscribirse al plan ${plan}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Suscríbete al Plan Premium</h2>
      <p className="mb-6">
        Obtén acceso exclusivo a contenido premium con nuestra suscripción.
      </p>

      <div className="flex justify-around mb-6">
        <button
          onClick={() => setPlan("monthly")}
          className={`px-4 py-2 rounded-lg ${
            plan === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Mensual - $10
        </button>
        <button
          onClick={() => setPlan("yearly")}
          className={`px-4 py-2 rounded-lg ${
            plan === "yearly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Anual - $100
        </button>
      </div>

      <button
        onClick={handleSubscribe}
        className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600"
      >
        Suscribirse
      </button>
    </div>
  );
}
