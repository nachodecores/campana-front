const fs = require("fs");
const path = require("path");

function consolidateJsonFiles() {
  // Usar process.cwd() para obtener el directorio raíz del proyecto
  const inputDirectory = path.join(process.cwd(), "src/scrapers/output");
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
  const outputFilePath = path.join(
    inputDirectory,
    `consolidated-${timestamp}.json`
  );

  // Validar que el directorio de entrada exista
  if (!fs.existsSync(inputDirectory)) {
    console.error(`El directorio de entrada no existe: ${inputDirectory}`);
    return;
  }

  // Leer todos los archivos JSON en el directorio de salida
  const files = fs
    .readdirSync(inputDirectory)
    .filter((file) => file.endsWith(".json"));

  let consolidatedData = [];

  // Procesar cada archivo
  files.forEach((file) => {
    const filePath = path.join(inputDirectory, file);
    const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    consolidatedData = consolidatedData.concat(fileData); // Combinar datos
  });

  // Guardar los datos consolidados en un nuevo archivo
  fs.writeFileSync(
    outputFilePath,
    JSON.stringify(consolidatedData, null, 2),
    "utf-8"
  );
  console.log(
    `Consolidación completada. Archivo guardado en: ${outputFilePath}`
  );
}

module.exports = consolidateJsonFiles;
