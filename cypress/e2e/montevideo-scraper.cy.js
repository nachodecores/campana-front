describe("Scraper de Montevideo.com.uy", () => {
  it("Extraer contenido de noticias", () => {
    // Visita la página principal
    cy.visit("https://www.montevideo.com.uy/");

    // Esperar a que se carguen los elementos
    cy.wait(3000);

    // Declara un array para almacenar las noticias
    const noticias = [];

    // Selecciona los artículos con la clase "noticia"
    cy.get("article.noticia").each(($article, index) => {
      if (index < 5) {
        // Limitar a las primeras 25 noticias
        const link = $article.find("a").attr("href");

        if (link) {
          // Visita el enlace de la noticia
          cy.visit(link);

          // Extrae el contenido de las etiquetas <p> y guarda los datos
          cy.get("p").then(($paragraphs) => {
            const contenido = $paragraphs
              .toArray()
              .map((p) => p.innerText)
              .join(" "); // Combina el texto de todos los <p>

            noticias.push({ link, contenido });

            // Escribe las noticias en un archivo JSON una vez completado
            if (index === 24) {
              cy.writeFile("cypress/results/montevideo.json", noticias);
            }
          });
        }
      }
    });
  });
});
