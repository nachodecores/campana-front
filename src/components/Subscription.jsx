import React, { useState } from "react";
import { supabase } from "../supabaseClient"; // Asegúrate de que la ruta sea correcta

export default function Subscription() {
  const [plan, setPlan] = useState("monthly"); // Plan por defecto (mensual)
  const [name, setName] = useState(""); // Nombre del usuario
  const [email, setEmail] = useState(""); // Email del usuario

  const handleSubscribe = async () => {
    if (!name || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const { data, error } = await supabase.from("subscriptions").insert([
        {
          name,
          email,
          subscription_type: plan === "monthly" ? "mensual" : "anual",
        },
      ]);

      if (error) {
        console.error("Error al suscribirse:", error.message);
        alert("Error al procesar la suscripción.");
      } else {
        alert(
          `Gracias, ${name}. Te has suscrito al plan ${
            plan === "monthly" ? "mensual" : "anual"
          }`
        );
        setName(""); // Limpia el campo nombre
        setEmail(""); // Limpia el campo email
      }
    } catch (err) {
      console.error("Error inesperado:", err);
      alert("Error inesperado. Inténtalo nuevamente.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Suscríbete al Plan Premium</h2>
      <p className="mb-6">
        Obtén acceso exclusivo a contenido premium con nuestra suscripción.
      </p>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Nombre
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Ingresa tu nombre"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg"
          placeholder="Ingresa tu email"
        />
      </div>

      <div className="flex justify-around mb-6">
        <button
          onClick={() => setPlan("monthly")}
          className={`px-4 py-2 rounded-lg ${
            plan === "monthly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Mensual - U$S 1
        </button>
        <button
          onClick={() => setPlan("yearly")}
          className={`px-4 py-2 rounded-lg ${
            plan === "yearly" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Anual - U$S 10
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
