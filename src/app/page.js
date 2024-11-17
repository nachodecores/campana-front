"use client";

import { supabase } from "../supabaseClient";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    // Función para cargar las noticias desde la base de datos
    const fetchNoticias = async () => {
      const { data, error } = await supabase.from("news").select("*"); // Puedes especificar columnas si deseas filtrar los datos

      if (error) {
        console.error("Error al cargar noticias:", error);
      } else {
        setNoticias(data); // Almacena las noticias en el estado
      }
    };

    fetchNoticias(); // Llama a la función al montar el componente
  }, []);

  return (
    <main className="min-h-screen custom-gradient py-10">
      <Header />

      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto p-4 mt-20 font-customBold">
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
            id={noticia.id} // Pasa el ID aquí
            titulo={noticia.titulo}
            version_corta={noticia.version_corta}
            relevancia={noticia.relevancia}
          />
        ))}
      </section>
      <Footer />
    </main>
  );
}
