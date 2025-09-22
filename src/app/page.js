"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import NewsCard from "../components/NewsCard.jsx";
import Footer from "../components/Footer.jsx";
import NewsProcessor from "../components/NewsProcessor.jsx";
import SupabaseStatus from "../components/SupabaseStatus.jsx";
import LocalDataService from "../services/localDataService";
import categoryStyles from "@/utils/categoryStyles";
import normalizeCategory from "@/utils/normalizeCategory";

export default function Home() {
  const [noticias, setNoticias] = useState([]);
  const [processedNews, setProcessedNews] = useState([]);
  const [showProcessor, setShowProcessor] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Función para cargar las noticias desde el servicio local
    const fetchNoticias = async () => {
      try {
        setLoading(true);
        const dataService = new LocalDataService();
        const newsData = await dataService.getNews();
        setNoticias(newsData);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNoticias(); // Llama a la función al montar el componente
  }, []);

  return (
    <main className="min-h-screen custom-gradient py-10">
      <div className="hidden text-red-500 text-green-500 text-blue-500 bg-red-100 bg-green-100 bg-blue-100 border-red-500 border-green-500 border-blue-500"></div>

      <Header />

      {/* Estado de Supabase */}
      <div className="max-w-6xl mx-auto p-4 mt-20">
        <SupabaseStatus />
      </div>

      {/* Botón para mostrar procesador */}
      <div className="max-w-6xl mx-auto p-4">
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

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
          <span className="ml-4 text-lg text-gray-600">Cargando noticias...</span>
        </div>
      ) : noticias.length === 0 ? (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-600 mb-4">No hay noticias disponibles</h2>
          <p className="text-gray-500 mb-6">Ejecuta los scrapers para obtener noticias frescas</p>
          <a 
            href="/run-scrapers" 
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            🚀 Ir al Panel de Control
          </a>
        </div>
      ) : (
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
      )}

      <Footer />
    </main>
  );
}
