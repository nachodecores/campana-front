import { NextResponse } from "next/server";
import runScrapers from "@/scrapers/index"; // Importa el archivo index.js

export async function POST() {
  try {
    console.log("Ejecutando todos los scrapers...");

    // Ejecutar el archivo index.js
    await runScrapers();

    return NextResponse.json({ message: "Scraping completado con éxito" });
  } catch (error) {
    console.error("Error al ejecutar los scrapers:", error);
    return NextResponse.json(
      { error: "Error al ejecutar los scrapers" },
      { status: 500 }
    );
  }
}
