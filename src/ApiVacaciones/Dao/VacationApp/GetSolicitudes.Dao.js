import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const getSolicitudesDao = async (unidadSolicitud) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `SELECT 
                        sl.idSolicitud, sl.idEmpleado,  sl.idInfoPersonal, 
                        CONCAT(inf.primerNombre, ' ', inf.segundoNombre, ' ', inf.primerApellido, ' ', inf.segundoApellido) AS nombreCompleto, 
                        sl.unidadSolicitud, sl.fechaInicioVacaciones, sl.fechaFinVacaciones, sl.fechaRetornoLabores, sl.cantidadDiasSolicitados, 
                        sl.estadoSolicitud, sl.fechaSolicitud, sl.descripcionRechazo
                    FROM 
                        solicitudes_vacaciones sl
                    JOIN 
                        infoPersonalEmpleados inf ON sl.idInfoPersonal = inf.idInfoPersonal
                        and unidadSolicitud = ?;
                    `;

    const [solicitudes] = await dbConnection.query(query, [unidadSolicitud]);
    if (solicitudes.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE SOLICITUDES",
      };
    } else {
      return solicitudes;
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
