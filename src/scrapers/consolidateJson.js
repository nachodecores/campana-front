const fs = require("fs");
const path = require("path");

function consolidateJsonFiles() {
  const inputDirectory = path.join(__dirname, "output");
  const outputFilePath = path.join(inputDirectory, "consolidated.json");

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
