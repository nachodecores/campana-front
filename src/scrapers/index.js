const scrapeMontevideo = require("./montevideoScraper");
const scrapeLR21 = require("./lr21Scraper");

async function runScrapers() {
  console.log("Iniciando scrapers...");

  await scrapeMontevideo();
  await scrapeLR21();

  console.log("Scraping finalizado.");
}

runScrapers();
