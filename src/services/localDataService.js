// Servicio de datos local para desarrollo sin Supabase
import sampleNews from '../data/sample-news.json';

class LocalDataService {
  constructor() {
    this.news = [...sampleNews];
    this.nextId = Math.max(...sampleNews.map(n => n.id)) + 1;
  }

  // Simular carga de noticias
  async getNews() {
    // Simular delay de red
    await new Promise(resolve => setTimeout(resolve, 500));
    return this.news;
  }

  // Agregar nueva noticia
  async addNews(newsData) {
    const newNews = {
      id: this.nextId++,
      ...newsData,
      fecha: new Date().toISOString().split('T')[0]
    };
    
    this.news.unshift(newNews);
    return newNews;
  }

  // Actualizar noticia
  async updateNews(id, updates) {
    const index = this.news.findIndex(n => n.id === id);
    if (index !== -1) {
      this.news[index] = { ...this.news[index], ...updates };
      return this.news[index];
    }
    return null;
  }

  // Eliminar noticia
  async deleteNews(id) {
    const index = this.news.findIndex(n => n.id === id);
    if (index !== -1) {
      return this.news.splice(index, 1)[0];
    }
    return null;
  }

  // Buscar noticias por categoría
  async getNewsByCategory(category) {
    return this.news.filter(n => 
      n.categoria.toLowerCase() === category.toLowerCase()
    );
  }

  // Buscar noticias por texto
  async searchNews(query) {
    const lowerQuery = query.toLowerCase();
    return this.news.filter(n => 
      n.titulo.toLowerCase().includes(lowerQuery) ||
      n.contenido.toLowerCase().includes(lowerQuery)
    );
  }
}

export default LocalDataService;
