// src/app/api/generate-news-from-prompt/route.js
import { supabase } from "../../../supabaseClient";

export async function POST(req) {
  const { prompt } = await req.json();

  if (!prompt) {
    return new Response(JSON.stringify({ error: "Prompt is required" }), {
      status: 400,
    });
  }

  const generatedNoticias = [];
  for (let i = 1; i <= 5; i++) {
    const openaiResponse = await fetch(
      "https://api.openai.com/v1/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: `Genera una noticia breve con el título y descripción sobre el tema: "${prompt}". Noticia ${i} de 5.`,
          max_tokens: 150,
        }),
      }
    );

    const openaiData = await openaiResponse.json();
    const descripcion = openaiData.choices?.[0]?.text?.trim();
    const titulo = `Noticia ${i} sobre ${prompt}`;

    if (descripcion) {
      const { data, error } = await supabase
        .from("noticias")
        .insert([{ titulo, descripcion, enlace: "#" }])
        .single();

      if (error) {
        return new Response(
          JSON.stringify({ error: "Failed to save news to database." }),
          { status: 500 }
        );
      }
      generatedNoticias.push(data);
    } else {
      return new Response(
        JSON.stringify({ error: "Failed to generate content." }),
        { status: 500 }
      );
    }
  }

  return new Response(
    JSON.stringify({ success: true, noticias: generatedNoticias }),
    { status: 200 }
  );
}
