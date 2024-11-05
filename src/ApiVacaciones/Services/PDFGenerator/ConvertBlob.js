/**
 * Convierte un buffer en un Blob de tipo PDF.
 * @param {ArrayBuffer} buffer - El buffer que contiene los datos del PDF.
 * @returns {Blob} - Un Blob de tipo PDF listo para ser usado en el frontend.
 */
export const bufferToPdfBlob = (buffer) => {
    return new Blob([buffer], { type: 'application/pdf' });
  }
  