const scrapeMontevideo = require("./montevideoScraper");

async function runScrapers() {
  console.log("Iniciando scrapers...");

  await scrapeMontevideo();

  console.log("Scraping finalizado.");
}

runScrapers();
