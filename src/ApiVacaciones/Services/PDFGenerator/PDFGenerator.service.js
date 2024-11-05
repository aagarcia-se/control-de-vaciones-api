import PDFDocument from "pdfkit";
import path from "path";
import { fileURLToPath } from "url";
import { formatDateToDisplay } from "../Utils/DateUtils.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const generateVacationRequestPDF = async (employeeData) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 60 });
    let chunks = [];

    // Escuchar los datos generados
    doc.on("data", (chunk) => chunks.push(chunk));
    doc.on("end", () => resolve(Buffer.concat(chunks)));
    doc.on("error", (err) => reject(err));

    // Agregar logo centrado en la parte superior
    const logoPath = path.join(__dirname, "..", "..", "..", "assets", "image.png");
    const logoWidth = 150;
    const logoYPosition = 30; // Ajusta este valor para mover la imagen más arriba
    doc.image(logoPath, (doc.page.width - logoWidth) / 2, logoYPosition, { width: logoWidth });

    // Mover hacia abajo para dar espacio después del logo
    doc.moveDown(6);

    // Establecer fuente y tamaño por defecto
    doc.font("Helvetica");
    const titleFontSize = 18;
    const bodyFontSize = 12;

    // Títulos
    doc.font("Helvetica-Bold").fontSize(titleFontSize).text("Consejo Nacional de Adopciones -CNA-", { align: "center" });
    doc.text("Solicitud de Vacaciones", { align: "center" });

    doc.moveDown(1.5);
    doc.fontSize(bodyFontSize).text("Licenciado.");
    doc.text("Coordinador de Recursos Humanos");
    doc.text("Presente");
    doc.moveDown(1.5);

    // Texto con valores dinámicos en negrita
    doc.text("YO,", { continued: true }).font("Helvetica-Bold").text(` ${employeeData.nombreCompleto}`);
    doc.moveDown(0.5);
    
    doc.font("Helvetica").text("Que desempeño el cargo de:", { continued: true })
      .font("Helvetica-Bold").text(` ${employeeData.puesto}`);
    doc.moveDown(0.5);
    
    doc.font("Helvetica").text("De la Dirección y/o Coordinación de:", { continued: true })
      .font("Helvetica-Bold").text(` ${employeeData.unidadSolicitud}`);
    doc.moveDown(1.5);
    
    doc.font("Helvetica").text("Por este medio solicito", { continued: true })
      .font("Helvetica-Bold").text(` ${employeeData.cantidadDiasSolicitados}`, { continued: true })
      .font("Helvetica").text(" días de vacaciones a partir del", { continued: true })
      .font("Helvetica-Bold").text(` ${formatDateToDisplay(employeeData.fechaInicioVacaciones)}`, { continued: true })
      .font("Helvetica").text(" al", { continued: true })
      .font("Helvetica-Bold").text(` ${formatDateToDisplay(employeeData.fechaFinVacaciones)}`, { continued: true })
      .font("Helvetica").text(" a que tengo derecho.");
      doc.moveDown(3);

    // Ajuste de posición de firma
    const leftX = 100;
    const rightX = 350;

    doc.moveDown(2);

    // Línea de firma
    const lineY = doc.y;
    doc.text("__________________________", leftX, lineY);
    doc.text("__________________________", rightX, lineY);
    doc.moveDown(4);

    // Texto de firma
    const signatureTextY = lineY + 18;
    doc.font("Helvetica-Bold").text("Firma del solicitante", leftX + 35, signatureTextY); // Ajustar posición centrada
    doc.text("Vo.Bo.", rightX + 80, signatureTextY); // Ajustar posición centrada

    // Finalizar el documento
    doc.end();
  });
};
