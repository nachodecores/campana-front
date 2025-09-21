// Servicio de procesamiento de IA gratuito
import Groq from 'groq-sdk';

// Configuración para diferentes estilos de redacción
const WRITING_STYLES = {
  humor: {
    name: "Con Humor",
    description: "Redacta con humor, sarcasmo y referencias populares",
    prompt: "Reescribe esta noticia con humor, sarcasmo y referencias populares. Usa memes, chistes y un tono desenfadado pero mantén la información importante."
  },
  telegrama: {
    name: "Estilo Telegrama",
    description: "Formato telegráfico, conciso y directo",
    prompt: "Reescribe esta noticia en formato telegráfico: frases cortas, concisas, solo hechos esenciales. Usa puntos y comas para separar información clave."
  },
  novelada: {
    name: "Narrativa Literaria",
    description: "Estilo novelado y descriptivo",
    prompt: "Reescribe esta noticia como una narrativa literaria. Usa descripciones vívidas, metáforas y un estilo envolvente que mantenga al lector interesado."
  },
  formal: {
    name: "Periodístico Formal",
    description: "Tono periodístico tradicional y objetivo",
    prompt: "Reescribe esta noticia con un tono periodístico formal, objetivo y profesional. Mantén la estructura tradicional de noticia con lead, desarrollo y cierre."
  }
};

class AIProcessor {
  constructor() {
    // Groq es gratuito con límites generosos
    this.groq = new Groq({
      apiKey: process.env.GROQ_API_KEY || 'gsk_your_free_key_here'
    });
  }

  // Procesar noticia con estilo específico
  async processNews(newsContent, style = 'formal') {
    try {
      const styleConfig = WRITING_STYLES[style] || WRITING_STYLES.formal;
      
      const response = await this.groq.chat.completions.create({
        messages: [
          {
            role: "system",
            content: `Eres un redactor experto que reescribe noticias según diferentes estilos. ${styleConfig.prompt}`
          },
          {
            role: "user",
            content: `Noticia original: ${newsContent}`
          }
        ],
        model: "llama3-8b-8192", // Modelo gratuito y rápido
        temperature: 0.7,
        max_tokens: 1000
      });

      return {
        originalContent: newsContent,
        processedContent: response.choices[0].message.content,
        style: style,
        styleName: styleConfig.name
      };
    } catch (error) {
      console.error('Error procesando con IA:', error);
      // Fallback: devolver contenido original con estilo básico
      return {
        originalContent: newsContent,
        processedContent: this.fallbackProcessing(newsContent, style),
        style: style,
        styleName: WRITING_STYLES[style]?.name || 'Formal'
      };
    }
  }

  // Procesamiento de fallback sin IA (básico)
  fallbackProcessing(content, style) {
    switch (style) {
      case 'telegrama':
        return content.split('.').slice(0, 3).join('.') + '.';
      case 'humor':
        return `🤔 ${content} (¿En serio?)`;
      case 'novelada':
        return `En un mundo donde las noticias se entrelazan... ${content}`;
      default:
        return content;
    }
  }

  // Obtener estilos disponibles
  getAvailableStyles() {
    return Object.keys(WRITING_STYLES).map(key => ({
      key,
      ...WRITING_STYLES[key]
    }));
  }

  // Procesar múltiples noticias
  async processMultipleNews(newsArray, style = 'formal') {
    const results = [];
    
    for (const news of newsArray) {
      try {
        const processed = await this.processNews(news.content, style);
        results.push({
          ...news,
          processedContent: processed.processedContent,
          style: style
        });
      } catch (error) {
        console.error(`Error procesando noticia: ${news.url}`, error);
        results.push({
          ...news,
          processedContent: news.content,
          style: style,
          error: true
        });
      }
    }
    
    return results;
  }
}

export default AIProcessor;
export { WRITING_STYLES };
