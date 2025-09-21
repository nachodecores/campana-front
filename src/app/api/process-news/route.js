import { NextResponse } from "next/server";
import AIProcessor from "@/services/aiProcessor";

export async function POST(request) {
  try {
    const { newsData, style = 'formal' } = await request.json();
    
    if (!newsData || !Array.isArray(newsData)) {
      return NextResponse.json(
        { error: "Se requiere un array de noticias" },
        { status: 400 }
      );
    }

    console.log(`Procesando ${newsData.length} noticias con estilo: ${style}`);
    
    const aiProcessor = new AIProcessor();
    const processedNews = await aiProcessor.processMultipleNews(newsData, style);
    
    return NextResponse.json({
      success: true,
      processedNews,
      style,
      count: processedNews.length
    });
    
  } catch (error) {
    console.error("Error procesando noticias:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

// Endpoint para obtener estilos disponibles
export async function GET() {
  try {
    const aiProcessor = new AIProcessor();
    const styles = aiProcessor.getAvailableStyles();
    
    return NextResponse.json({
      success: true,
      styles
    });
  } catch (error) {
    console.error("Error obteniendo estilos:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
