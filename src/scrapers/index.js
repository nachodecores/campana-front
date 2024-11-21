const scrapeMontevideo = require("./montevideoScraper");
const scrapeLR21 = require("./lr21Scraper");
const scrapeElPais = require("./elpaisScraper");

async function runScrapers() {
  console.log("Iniciando scrapers...");

  await scrapeMontevideo();
  await scrapeLR21();
  await scrapeElPais();

  console.log("Scraping finalizado.");
}

runScrapers();
