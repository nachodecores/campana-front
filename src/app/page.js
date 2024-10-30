import React from "react";

export default function Home() {
  const noticias = [
    {
      titulo: "Noticia 1",
      descripcion: "Resumen de la noticia 1",
      enlace: "#",
    },
    {
      titulo: "Noticia 2",
      descripcion: "Resumen de la noticia 2",
      enlace: "#",
    },
    {
      titulo: "Noticia 3",
      descripcion: "Resumen de la noticia 3",
      enlace: "#",
    },
    // Agrega más noticias según sea necesario
  ];

  return (
    <main className="min-h-screen bg-gray-100 py-10 custom-gradient">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">Campana</h1>
        <p className="text-lg text-gray-600">
          Tu fuente imparcial de noticias principales, actualizadas cada hora.
        </p>
      </header>

      <section className="max-w-4xl mx-auto px-4 grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {noticias.map((noticia, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full"
          >
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {noticia.titulo}
              </h2>
              <p className="text-gray-600 mb-4">{noticia.descripcion}</p>
              <a
                href={noticia.enlace}
                className="text-blue-500 hover:underline"
              >
                Leer más
              </a>
            </div>
          </div>
        ))}
      </section>

      <footer className="text-center mt-10 text-gray-600">
        <p>&copy; 2023 Campana. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}
