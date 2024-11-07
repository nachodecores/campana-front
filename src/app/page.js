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
      id: 4,
      titulo: "Noticia Pequeña 2",
      descripcion: "Otra noticia de baja relevancia",
      relevancia: "baja",
    },
    // Agrega más noticias según sea necesario
  ]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 py-10">
      <Header />

      <section
        className="grid gap-4 max-w-6xl mx-auto p-4"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridTemplateRows: "auto",
          gridTemplateAreas: `
            "alta alta media media"
            "alta alta baja1 baja2"
          `,
        }}
      >
        {noticias.map((noticia, index) => (
          <NewsCard
            key={noticia.id}
            titulo={noticia.titulo}
            descripcion={noticia.descripcion}
            relevancia={noticia.relevancia}
            area={`baja${index}`}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
}
