const puppeteer = require("puppeteer");
const fs = require("fs");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrapeLR21() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navegar a la página principal
  await page.goto("https://www.lr21.com.uy/", { waitUntil: "networkidle2" });

  // Esperar a que se carguen los elementos
  await page.waitForSelector("div.card");

  // Extraer los enlaces dentro de los div con clase "card"
  let articles = await page.$$eval("div.card a", (links) =>
    links.map((link) => ({
      href: new URL(link.getAttribute("href"), location.origin).href, // Convierte URLs relativas a absolutas
    }))
  );

  // Limitar a las primeras 25 noticias
  articles = articles.slice(0, 25);

  // Extraer contenido de cada enlace
  const newsContent = [];
  for (const { href } of articles) {
    try {
      await page.goto(href, { waitUntil: "networkidle2" });

      // Extraer el contenido de las etiquetas <p> con más de 140 caracteres
      const paragraphs = await page.$$eval(
        "p",
        (nodes) =>
          nodes
            .map((node) => node.innerText.trim()) // Extrae y limpia el texto
            .filter((text) => text.length > 140) // Filtra párrafos con más de 140 caracteres
      );

      newsContent.push({
        url: href,
        content: paragraphs,
      });
    } catch (error) {
      console.error(`Error al procesar la URL ${href}:`, error.message);
    }
  }

  await browser.close();

  // Guardar en un archivo JSON
  const filePath = "./src/scrapers/output/lr21.json";
  fs.mkdirSync("./src/scrapers/output", { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(newsContent, null, 2), "utf-8");

  console.log(`Scraping de LR21 completado. Archivo guardado en: ${filePath}`);
}

module.exports = scrapeLR21;
