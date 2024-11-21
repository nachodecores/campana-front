const scrapeMontevideo = require("./montevideoScraper");
const scrapeLR21 = require("./lr21Scraper");
const scrapeElPais = require("./elPaisScraper");
const consolidateJsonFiles = require("./consolidateJson");

async function runScrapers() {
  console.log("Iniciando scrapers...");
  await scrapeMontevideo();
  await scrapeLR21();
  await scrapeElPais();

  console.log("Consolidando datos...");
  consolidateJsonFiles();

  console.log("Scraping y consolidación finalizados.");
}

export default runScrapers;
