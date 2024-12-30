import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const vacacionesReportDao = async (unidad) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `
                      select sv.idSolicitud, sv.idEmpleado, 
                      concat(inf.primerNombre, ' ' , inf.segundoNombre, 
                      '', inf.primerApellido, ' ' , inf.segundoApellido) as Nombre,
                      sv.unidadSolicitud, sv.fechaInicioVacaciones, sv.fechaFinVacaciones,
                      sv.fechaRetornoLabores, sv.cantidadDiasSolicitados, sv.estadoSolicitud,
                      sv.fechaSolicitud, sv.coordinadorResolucion as coordinadorAprobo,
                      sv.fechaResolucion as fechaAutorizacion, sv.descripcionRechazo, 
                      sv.fechaSolicitud
                      from solicitudes_vacaciones sv,
                      infoPersonalEmpleados inf, empleados emp
                      where sv.idEmpleado = emp.idEmpleado
                      and sv.idInfoPersonal = inf.idInfoPersonal
                      and unidadSolicitud = ?;
                    `;

    const [reporteVacaciones] = await dbConnection.query(query, [unidad]);
    if (reporteVacaciones.length === 0) {
      throw {
        codRes: 409,
        message: "NO REGISTROS PARA LOS DATOS INGRESADOS",
      };
    } else {
      return reporteVacaciones;
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};