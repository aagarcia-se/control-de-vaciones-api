import { GenerarPlantillasCorreos } from "../../../PlantillasCorreos/plantilas.js";
import { EnviarMailSolicitudDeVacaciones } from "../../email/EnvioEmailVacacionesAutorizadas.service.js";
import { generateVacationRequestPDF } from "../../PDFGenerator/PDFGenerator.service.js";
import { consultarCoordinadorService } from "../../Coordinadores/Coordinadores.Service.js";
import { getSolicitudesByIdSolcitudDao } from "../../../Dao/VacationApp/GetSolicitudById.Dao.js";

export const notificarSolicitudVacacionesIngresada = async (data) => {
  try {
    //Consultar Coordinador
    const coordinador = await consultarCoordinadorService(data.unidadSolicitud);

    //Consultar datos del empleado desde la solicitud ingresada
    const infoEmpleado = await getSolicitudesByIdSolcitudDao(data.idSolicitud,data.idEmpleado);

    //Integrar datos genereales de la solcitud
    const dataSolicitud = { ...data, ...coordinador, ...infoEmpleado };

    //Generar plantilla para el envio de correo
    const plantillaHtml = GenerarPlantillasCorreos("solicitud-vacaciones",dataSolicitud);

    //Generar pdf de la autorizacion
    const bufferPDF = await generateVacationRequestPDF(dataSolicitud);

    //Envio de correo solicitud autorizada
    await EnviarMailSolicitudDeVacaciones(
      dataSolicitud,
      plantillaHtml,
      bufferPDF
    );
  } catch (error) {
    throw error;
  }
};
