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
import { consultarCoordinadorService } from "../Coordinadores/Coordinadores.Service.js";
import { EnviarMailAutorizacionDeVacaciones } from "../email/EnvioEmailVacacionesAutorizadas.service.js";
import { generateVacationRequestPDF } from "../PDFGenerator/PDFGenerator.service.js";
import { notificarSolicitudVacacionesIngresada } from "../ServiciosGenerales/EnvioDeCorreos/Notificaciones.service.js";

export const IngresarSolicitudService = async (data) => {
  try {
    //Consultar si exite una solicitud activa
    const solicitud = await getSolicitudesByIdDao(data.idEmpleado, data.idInfoPersonal);

    //Si existe una solicitud activa se elimina (Solo puede haber una solicitud activa)
    if (solicitud.idSolicitud) {
      await eliminarSolicitudDao(solicitud.idSolicitud);
    }

    //Se ingresa la solicitud
    const idSolicitud = await IngresarSolicitudDao(data);

    data.idSolicitud = idSolicitud;

    // Notificar de la solicitud ingresada via Correo al coordinador de la unidad
    await notificarSolicitudVacacionesIngresada(data);

    return idSolicitud;
  } catch (error) {

    if (error.codRes === 409) {
      const idSolicitud = await IngresarSolicitudDao(data)

      data.idSolicitud = idSolicitud;

      // Notificar de la solicitud ingresada via Correo al coordinador de la unidad
      await notificarSolicitudVacacionesIngresada(data);
      
      return idSolicitud;
    }

    throw error; // Mantener el throw para que el error se propague
  }

};

export const actualizarEstadoSolicitudService = async (data) => {
  try {

    //Autoriza la solicitud ingresada
    const result = await actualizarEstadoSolicitudDao(data);

    //Consulta de informacion de solicitud actualizar
    const solicitud = await getSolicitudesByIdSolcitudDao(data.idSolicitud,data.idEmpleado);
  
    //Consultar Datos coordinador
    const coordinador = await consultarCoordinadorService(solicitud.unidadSolicitud);

    const solicitudCompleta = {...solicitud, ...coordinador}

    //Generar pdf de la autorizacion
    const bufferPDF = await generateVacationRequestPDF(solicitudCompleta);

    //Generar plantilla html para envio de correo.
    const plantillaHtml = GenerarPlantillasCorreos("autorizacion-vacaciones", solicitud);

    //Envio de correo solicitud autorizada
    await EnviarMailAutorizacionDeVacaciones(solicitud, plantillaHtml, bufferPDF);

    return bufferPDF;
  } catch (error) {
    throw error; // Mantener el throw para que el error se propague
  }
};
