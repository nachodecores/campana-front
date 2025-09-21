# 🚀 Configuración de Campana - IA Gratuita

## Configuración Inicial

### 1. Variables de Entorno
Crea un archivo `.env.local` en la raíz del proyecto:

```bash
# Groq API (GRATUITO - 14,400 requests/día)
GROQ_API_KEY=tu_api_key_de_groq

# Supabase (ya configurado)
NEXT_PUBLIC_SUPABASE_URL=https://xpumowfrrpgdjtxeottu.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhwdW1vd2ZycnBnZGp0eGVvdHR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1NzQ1NjEsImV4cCI6MjA0NjE1MDU2MX0.wzfSv55ilWKubBLc-3SA87rn6kCHl1ieASf4DS2-PI8
```

### 2. Obtener API Key de Groq (GRATUITO)
1. Ve a [https://console.groq.com/](https://console.groq.com/)
2. Regístrate (es gratis)
3. Crea una API key
4. Copia la key al archivo `.env.local`

### 3. Instalar Dependencias
```bash
npm install
```

### 4. Ejecutar el Proyecto
```bash
npm run dev
```

## 🆓 Opciones Gratuitas de IA

### Groq (Recomendado)
- **Gratuito**: 14,400 requests/día
- **Velocidad**: Muy rápida
- **Modelos**: Llama 3, Mixtral, etc.

### Alternativas Gratuitas
1. **Hugging Face** - Modelos open source
2. **Ollama** - Local, sin límites
3. **Anthropic Claude** - 5 requests/minuto gratis

## 🎨 Estilos de Redacción Disponibles

- **Formal**: Periodístico tradicional
- **Humor**: Con sarcasmo y referencias populares
- **Telegrama**: Formato telegráfico, conciso
- **Novelada**: Narrativa literaria y descriptiva

## 🔧 Funcionalidades

1. **Scrapers**: Montevideo Portal, LR21, El País
2. **IA Processing**: 4 estilos de redacción
3. **Supabase**: Almacenamiento de noticias
4. **Frontend**: Interfaz moderna con Tailwind

## 📝 Uso

1. Ejecuta los scrapers para obtener noticias
2. Selecciona un estilo de redacción
3. Procesa las noticias con IA
4. Ve los resultados en la interfaz

¡Todo completamente gratuito! 🎉
