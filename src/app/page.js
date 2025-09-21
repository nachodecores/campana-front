"use client";

import { supabase } from "../supabaseClient";
import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Footer from "../components/Footer.jsx";
import NewsProcessor from "../components/NewsProcessor.jsx";
import categoryStyles from "@/utils/categoryStyles";
import normalizeCategory from "@/utils/normalizeCategory";

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  const [processedNews, setProcessedNews] = useState([]);
  const [showProcessor, setShowProcessor] = useState(false);

  useEffect(() => {
    // Función para cargar las noticias desde la base de datos
    const fetchNoticias = async () => {
      const { data, error } = await supabase.from("news").select("*");

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
      <div className="hidden text-red-500 text-green-500 text-blue-500 bg-red-100 bg-green-100 bg-blue-100 border-red-500 border-green-500 border-blue-500"></div>

      <Header />

      {/* Botón para mostrar procesador */}
      <div className="max-w-6xl mx-auto p-4 mt-20">
        <button
          onClick={() => setShowProcessor(!showProcessor)}
          className="mb-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
        >
          {showProcessor ? '❌ Ocultar' : '🤖 Procesar Noticias con IA'}
        </button>
        
        {showProcessor && (
          <NewsProcessor 
            newsData={noticias}
            onProcessedNews={setProcessedNews}
          />
        )}
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto p-4 font-customBold">
        {noticias.map((noticia) => {
          const normalizedCategory = normalizeCategory(noticia.categoria);
          const styles = categoryStyles[normalizedCategory];

          return (
            <NewsCard
              key={noticia.id}
              id={noticia.id}
              titulo={noticia.titulo}
              contenido={noticia.contenido}
              categoria={noticia.categoria}
              styles={styles} // Pasar los estilos precomputados como prop
            />
          );
        })}
      </section>

      <Footer />
    </main>
  );
}
