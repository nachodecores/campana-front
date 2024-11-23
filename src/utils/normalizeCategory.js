function normalizeCategory(category) {
  if (!category) return "";
  return category
    .toLowerCase() // Convertir a minúsculas
    .normalize("NFD") // Separar caracteres con tilde
    .replace(/[\u0300-\u036f]/g, ""); // Eliminar las tildes
}

export default normalizeCategory;
