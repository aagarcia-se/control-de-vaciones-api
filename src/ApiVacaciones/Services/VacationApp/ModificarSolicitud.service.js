import { getSolicitudesByIdDao } from "../../Dao/VacationApp/GetSolicitudById.Dao.js";
import { eliminarSolicitudDao, IngresarSolicitudDao } from "../../Dao/VacationApp/ModificarSolicitud.Dao.js";


export const IngresarSolicitudService = async (data) => {
    try {
        const solicitud = await getSolicitudesByIdDao(data.idEmpleado, data.idInfoPersonal);

        if (solicitud.idSolicitud) {
            await eliminarSolicitudDao(solicitud.idSolicitud);
        }

        const result = await IngresarSolicitudDao(data);
        return result;
    } catch (error) {
        if(error.codRes === 409){
            const result = await IngresarSolicitudDao(data);
            return result;
        }
        throw error; // Mantener el throw para que el error se propague
    }
};
