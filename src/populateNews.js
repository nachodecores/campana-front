import { supabase } from "./supabaseClient.js"; // Asegúrate de que esta ruta sea correcta
import noticias from "./data/noticias_uruguay.json"; // Ajusta esta ruta al archivo JSON

async function populateNews() {
  for (const noticia of noticias) {
    const { data, error } = await supabase.from("news").insert([
      {
        titulo: noticia.titulo,
        nivel_de_relevancia: noticia.nivel_de_relevancia,
        version_corta: noticia.version_corta,
        version_larga: noticia.version_larga,
        categoria: noticia.categoria,
      },
    ]);

    if (error) {
      console.error("Error al insertar noticia:", error.message);
    } else {
      console.log("Noticia insertada:", data);
    }
  }

  console.log("Población de noticias finalizada.");
}

populateNews();
