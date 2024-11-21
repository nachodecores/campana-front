import { NextResponse } from "next/server";
import scrapeMontevideo from "@/scrapers/montevideoScraper";
import scrapeLR21 from "@/scrapers/lr21Scraper";
import scrapeElPais from "@/scrapers/elPaisScraper";

export async function POST() {
  try {
    // Ejecutar ambos scrapers
    console.log("Ejecutando scrapers...");
    await scrapeMontevideo();
    await scrapeLR21();
    // await scrapeElPais();
    console.log("Scrapers ejecutados correctamente.");

    return NextResponse.json({ message: "Scrapers ejecutados correctamente." });
  } catch (error) {
    console.error("Error al ejecutar los scrapers:", error);
    return NextResponse.json(
      { error: "Error al ejecutar los scrapers." },
      { status: 500 }
    );
  }
}
