// src/app/news/[id]/page.js
import { supabase } from "../../../supabaseClient";
import CloseButton from "../../../components/CloseButton";

export default async function NewsDetail({ params }) {
  const { id } = params;

  // Realiza la consulta de datos en el servidor
  const { data: noticia, error } = await supabase
    .from("news")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error al cargar la noticia:", error);
    return <p>Error al cargar la noticia.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-lg relative">
      {/* Botón de cierre */}
      <CloseButton />

      <h1 className="text-3xl font-bold mb-4">{noticia.titulo}</h1>
      <p className="text-gray-700">{noticia.version_corta}</p>
      {/* Aquí puedes agregar más contenido de la noticia, si existe */}
    </div>
  );
}
