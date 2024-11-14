import { supabase } from "../../../supabaseClient";

export async function POST(req) {
  const { prompt } = await req.json();

  if (!prompt) {
    console.error("No prompt provided");
    return new Response(JSON.stringify({ error: "Prompt is required" }), {
      status: 400,
    });
  }

  const generatedNoticias = [];

  for (let i = 1; i <= 5; i++) {
    try {
      const openaiResponse = await fetch(
        "https://api.openai.com/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
              {
                role: "system",
                content: "You are a helpful assistant generating news content.",
              },
              {
                role: "user",
                content: `Genera una noticia breve con el título y descripción sobre el tema: "${prompt}". Noticia ${i} de 5.`,
              },
            ],
            max_tokens: 150,
          }),
        }
      );

      const openaiData = await openaiResponse.json();

      if (!openaiData.choices || !openaiData.choices[0].message.content) {
        console.error("Error en la respuesta de OpenAI:", openaiData);
        return new Response(
          JSON.stringify({ error: "Failed to generate content from OpenAI." }),
          { status: 500 }
        );
      }

      const version_corta = openaiData.choices[0].message.content.trim();
      const titulo = `Noticia ${i} sobre ${prompt}`;

      const { data, error } = await supabase
        .from("noticias")
        .insert([{ titulo, version_corta, enlace: "#" }])
        .single();

      if (error) {
        console.error("Error al guardar en la base de datos:", error);
        return new Response(
          JSON.stringify({ error: "Failed to save news to database." }),
          { status: 500 }
        );
      }

      generatedNoticias.push(data);
    } catch (err) {
      console.error("Error en la generación de noticias:", err);
      return new Response(JSON.stringify({ error: "Error generating news" }), {
        status: 500,
      });
    }
  }

  return new Response(
    JSON.stringify({ success: true, noticias: generatedNoticias }),
    { status: 200 }
  );
}
