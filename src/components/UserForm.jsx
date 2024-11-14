// src/components/UserForm.jsx
import React, { useState } from "react";
import { supabase } from "../supabaseClient";

export default function UserForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar datos a Supabase para agregar un nuevo usuario
    const { data, error } = await supabase
      .from("users")
      .insert([{ name, email }]);

    if (error) {
      setMessage(`Error al agregar usuario: ${error.message}`);
    } else {
      setMessage("Usuario agregado exitosamente!");
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Registrar Usuario</h2>
      {message && <p className="mb-4 text-green-500">{message}</p>}
      <form onSubmit={handleSubmit}>
        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg mt-1"
            required
          />
        </label>
        <label className="block mb-4">
          Correo electrónico:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg mt-1"
            required
          />
        </label>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
        >
          Agregar Usuario
        </button>
      </form>
    </div>
  );
}
