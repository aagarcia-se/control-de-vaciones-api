import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const obtenerInfoDPIDao = async (idEmpleado) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idDpi, numeroDocumento, departamentoExpedicion,
                    municipioExpedicion, fechaVencimientoDpi
                    from dpiEmpleados
                    where idDPi = ?;
                      `;

    const [dpiData] = await dbConnection.query(query, [idEmpleado]);
    if (dpiData.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE EMPLEADO CON EL ID INGRESADO",
      };
    } else {
      return dpiData[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
