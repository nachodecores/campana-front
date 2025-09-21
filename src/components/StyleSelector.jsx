import React, { useState, useEffect } from 'react';

export default function StyleSelector({ onStyleChange, currentStyle = 'formal' }) {
  const [styles, setStyles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStyles();
  }, []);

  const fetchStyles = async () => {
    try {
      const response = await fetch('/api/process-news');
      const data = await response.json();
      
      if (data.success) {
        setStyles(data.styles);
      }
    } catch (error) {
      console.error('Error cargando estilos:', error);
      // Fallback con estilos predefinidos
      setStyles([
        { key: 'formal', name: 'Periodístico Formal', description: 'Tono periodístico tradicional y objetivo' },
        { key: 'humor', name: 'Con Humor', description: 'Redacta con humor, sarcasmo y referencias populares' },
        { key: 'telegrama', name: 'Estilo Telegrama', description: 'Formato telegráfico, conciso y directo' },
        { key: 'novelada', name: 'Narrativa Literaria', description: 'Estilo novelado y descriptivo' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500"></div>
        <span className="ml-2 text-gray-600">Cargando estilos...</span>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-lg font-semibold mb-4 text-gray-800">
        🎨 Estilo de Redacción
      </h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {styles.map((style) => (
          <button
            key={style.key}
            onClick={() => onStyleChange(style.key)}
            className={`p-3 rounded-lg border-2 transition-all duration-200 text-left ${
              currentStyle === style.key
                ? 'border-blue-500 bg-blue-50 text-blue-700'
                : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50'
            }`}
          >
            <div className="font-medium text-sm">{style.name}</div>
            <div className="text-xs text-gray-600 mt-1">{style.description}</div>
          </button>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          💡 <strong>Gratuito:</strong> Usamos IA open source para procesar tus noticias sin costo
        </p>
      </div>
    </div>
  );
}
