const puppeteer = require("puppeteer");
const fs = require("fs");

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function scrapeMontevideo() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Navegar a la página principal
  await page.goto("https://www.montevideo.com.uy/", {
    waitUntil: "networkidle2",
  });

  // Esperar a que se carguen los artículos
  await page.waitForSelector("article.noticia");

  // Scroll infinito limitado a 25 noticias
  let articles = [];
  while (articles.length < 25) {
    articles = await page.$$eval("article.noticia a", (links) =>
      links.map((link) => ({ href: link.href }))
    );

    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight);
    });

    await delay(1000); // Esperar un segundo para cargar más contenido
  }

  // Limitar a las primeras 25 noticias
  articles = articles.slice(0, 25);

  // Extraer contenido de cada enlace
  const newsContent = [];
  for (const { href } of articles) {
    await page.goto(href, { waitUntil: "networkidle2" });

    // Extraer el contenido de las etiquetas <p>
    const paragraphs = await page.$$eval("p", (nodes) =>
      nodes.map((node) => node.innerText.trim()).filter((text) => text)
    );

    newsContent.push({
      url: href,
      content: paragraphs,
    });
  }

  await browser.close();

  // Guardar en un archivo JSON
  const filePath = "./src/scrapers/output/montevideo.json";
  fs.mkdirSync("./src/scrapers/output", { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(newsContent, null, 2), "utf-8");

  console.log(
    `Scraping de Montevideo Portal completado. Archivo guardado en: ${filePath}`
  );
}

module.exports = scrapeMontevideo;
