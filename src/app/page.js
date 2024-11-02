import React from "react";
import Header from "../components/Header.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const noticias = [
    {
      titulo: "Noticia 1",
      descripcion: "Resumen de la noticia 1",
      enlace: "#",
    },
    {
      titulo: "Noticia 2",
      descripcion: "Resumen de la noticia 2",
      enlace: "#",
    },
    {
      titulo: "Noticia 3",
      descripcion: "Resumen de la noticia 3",
      enlace: "#",
    },
    // Agrega más noticias según sea necesario
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 py-10">
      <Header />

      <section className="max-w-4xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {noticias.map((noticia, index) => (
          <NewsCard
            key={index}
            titulo={noticia.titulo}
            descripcion={noticia.descripcion}
            enlace={noticia.enlace}
          />
        ))}
      </section>

      <Footer />
    </main>
  );
}
