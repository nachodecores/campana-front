import { supabase } from "../../../supabaseClient";
import noticias from "../../../data/noticias_uruguay.json";

export async function POST(req) {
  try {
    for (const noticia of noticias) {
      const { error } = await supabase.from("news").insert([
        {
          titulo: noticia.titulo,
          relevancia: noticia.relevancia,
          version_corta: noticia.version_corta,
          version_larga: noticia.version_larga,
          categoria: noticia.categoria,
        },
      ]);

      if (error) throw error;
    }

    return new Response(
      JSON.stringify({ message: "Noticias insertadas correctamente." }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
