import consolidateJsonFiles from "@/scrapers/consolidateJson";

export async function POST() {
  try {
    console.log("Consolidando noticias...");
    await consolidateJsonFiles();
    return new Response(
      JSON.stringify({ message: "Consolidación completada con éxito" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error al consolidar noticias:", error);
    return new Response(
      JSON.stringify({ error: "Error al consolidar noticias" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
