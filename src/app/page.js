"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [noticias, setNoticias] = useState([
    {
      id: 1,
      titulo: "Noticia Relevante",
      descripcion: "Descripción de noticia relevante",
      relevancia: "alta",
    },
    {
      id: 2,
      titulo: "Noticia Mediana",
      descripcion: "Descripción de noticia mediana",
      relevancia: "media",
    },
    {
      id: 3,
      titulo: "Noticia Pequeña",
      descripcion: "Descripción de noticia pequeña",
      relevancia: "baja",
    },
    {
      id: 7,
      titulo: "Noticia Pequeña",
      descripcion: "Descripción de noticia pequeña",
      relevancia: "baja",
    },
    {
      id: 4,
      titulo: "Noticia Relevante",
      descripcion: "Descripción de noticia relevante",
      relevancia: "alta",
    },
    {
      id: 5,
      titulo: "Noticia Mediana",
      descripcion: "Descripción de noticia mediana",
      relevancia: "media",
    },
    {
      id: 6,
      titulo: "Noticia Pequeña",
      descripcion: "Descripción de noticia pequeña",
      relevancia: "baja",
    },
    // Agrega más noticias aquí
  ]);

  return (
    <main className="min-h-screen custom-gradient py-10">
      <Header />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto p-4">
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            titulo={noticia.titulo}
            descripcion={noticia.descripcion}
            relevancia={noticia.relevancia}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
}
