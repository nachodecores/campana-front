"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Footer from "../components/Footer.jsx";
import { supabase } from "../supabaseClient";

export default function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      const { data, error } = await supabase.from("noticias").select("*");
      if (error) console.error("Error fetching noticias:", error);
      else setNoticias(data);
    };

    fetchNoticias();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-purple-50 py-10">
      <Header />

      <section className="max-w-4xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {noticias.map((noticia) => (
          <NewsCard
            key={noticia.id}
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
