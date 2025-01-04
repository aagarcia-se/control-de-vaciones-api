
export const handleServiceError = (serviceFunction) => async (...args) => {
    try {
      return await serviceFunction(...args);
    } catch (error) {
      console.error("Error en servicio:", error.message);
      throw error; // Puedes personalizar cómo manejar el error si necesitas
    }
  };
  