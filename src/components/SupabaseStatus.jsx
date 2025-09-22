import React, { useState } from 'react';

export default function SupabaseStatus() {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-yellow-600 mr-3">
            ⚠️
          </div>
          <div>
            <h3 className="font-semibold text-yellow-800">
              Base de Datos Pausada
            </h3>
            <p className="text-sm text-yellow-700">
              Supabase está pausado. Usando datos de muestra.
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-yellow-600 hover:text-yellow-800"
        >
          {showDetails ? '▼' : '▶'}
        </button>
      </div>
      
      {showDetails && (
        <div className="mt-4 p-3 bg-yellow-100 rounded-lg">
          <h4 className="font-semibold text-yellow-800 mb-2">
            🔧 Cómo restaurar Supabase:
          </h4>
          <ol className="text-sm text-yellow-700 space-y-1">
            <li>1. Ve a tu dashboard de Supabase</li>
            <li>2. Descarga el backup de tu proyecto</li>
            <li>3. Crea un nuevo proyecto</li>
            <li>4. Restaura el backup</li>
            <li>5. Actualiza las variables de entorno</li>
          </ol>
          <div className="mt-3">
            <a 
              href="https://supabase.com/dashboard" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline text-sm"
            >
              → Ir a Supabase Dashboard
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
