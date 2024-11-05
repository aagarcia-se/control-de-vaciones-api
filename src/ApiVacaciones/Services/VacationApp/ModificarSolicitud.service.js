import {
  getSolicitudesByIdDao,
  getSolicitudesByIdSolcitudDao,
} from "../../Dao/VacationApp/GetSolicitudById.Dao.js";
import {
  actualizarEstadoSolicitudDao,
  eliminarSolicitudDao,
  IngresarSolicitudDao,
} from "../../Dao/VacationApp/ModificarSolicitud.Dao.js";
import { GenerarPlantillasCorreos } from "../../PlantillasCorreos/plantilas.js";
import { EnviarMailAutorizacionDeVacaciones } from "../email/EnvioEmailVacacionesAutorizadas.service.js";
import { bufferToPdfBlob } from "../PDFGenerator/ConvertBlob.js";
import { generateVacationRequestPDF } from "../PDFGenerator/PDFGenerator.service.js";

export const IngresarSolicitudService = async (data) => {
  try {
    const solicitud = await getSolicitudesByIdDao(
      data.idEmpleado,
      data.idInfoPersonal
    );

    if (solicitud.idSolicitud) {
      await eliminarSolicitudDao(solicitud.idSolicitud);
    }

    const result = await IngresarSolicitudDao(data);
    return result;
  } catch (error) {
    if (error.codRes === 409) {
      const result = await IngresarSolicitudDao(data);
      return result;
    }
    throw error; // Mantener el throw para que el error se propague
  }
};

export const actualizarEstadoSolicitudService = async (data) => {
  try {

    //Autoriza la solicitud ingresada
    const result = await actualizarEstadoSolicitudDao(data);

    //Consulta de informacion de solicitud a actualizar
    const solicitud = await getSolicitudesByIdSolcitudDao(data.idSolicitud,data.idEmpleado);

    //Generar pdf de la autorizacion
    const bufferPDF = await generateVacationRequestPDF(solicitud);

    //Generar plantilla html para envio de correo.
    const plantillaHtml = GenerarPlantillasCorreos("autorizacion-vacaciones", solicitud);

    await EnviarMailAutorizacionDeVacaciones(solicitud, plantillaHtml, bufferPDF);

    return bufferPDF;
  } catch (error) {
    throw error; // Mantener el throw para que el error se propague
  }
};
