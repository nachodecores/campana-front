import React, { useState } from 'react';
import StyleSelector from './StyleSelector';

export default function NewsProcessor({ newsData, onProcessedNews }) {
  const [selectedStyle, setSelectedStyle] = useState('formal');
  const [processing, setProcessing] = useState(false);
  const [processedNews, setProcessedNews] = useState(null);

  const handleStyleChange = (style) => {
    setSelectedStyle(style);
    setProcessedNews(null); // Reset processed news when style changes
  };

  const processNews = async () => {
    if (!newsData || newsData.length === 0) {
      alert('No hay noticias para procesar');
      return;
    }

    setProcessing(true);
    
    try {
      const response = await fetch('/api/process-news', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newsData: newsData,
          style: selectedStyle
        }),
      });

      const result = await response.json();
      
      if (result.success) {
        setProcessedNews(result.processedNews);
        onProcessedNews(result.processedNews);
      } else {
        alert('Error procesando noticias: ' + result.error);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error procesando noticias');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        🤖 Procesador de Noticias con IA
      </h2>
      
      <StyleSelector 
        currentStyle={selectedStyle}
        onStyleChange={handleStyleChange}
      />
      
      <div className="mt-6">
        <button
          onClick={processNews}
          disabled={processing || !newsData || newsData.length === 0}
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-200 ${
            processing || !newsData || newsData.length === 0
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {processing ? (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
              Procesando con IA...
            </div>
          ) : (
            `🔄 Procesar ${newsData?.length || 0} noticias`
          )}
        </button>
      </div>

      {processedNews && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-semibold text-green-800 mb-2">
            ✅ Noticias Procesadas
          </h3>
          <p className="text-sm text-green-700">
            Se procesaron {processedNews.length} noticias con estilo "{selectedStyle}"
          </p>
        </div>
      )}
    </div>
  );
}
