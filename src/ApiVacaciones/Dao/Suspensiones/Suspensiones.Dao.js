import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const ingresarSuspensionDao = async (data) => {
    let dbConnection;
    try {
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const queryInsert = `
                            insert into suspensiones (idEmpleado, CUI, nombreEmpleado,
                            fechaInicioSuspension, fechaFinSuspension, descripcionSuspension)
                            values (?, ?, ?, ?, ?, ?);
                    `;
 
        const [result] = await dbConnection.query(queryInsert, [
            data.idEmpleado,
            data.CUI,
            data.nombreEmpleado,
            data.fechaInicioSuspension,
            data.fechaFinSuspension,
            data.descripcionSuspension
        ]);

        await dbConnection.commit();
        return result.insertId;
    } catch (error) {
        if (dbConnection) {
            await dbConnection.rollback();
        }
        throw error;
    } finally {
        if (dbConnection) {
            await CloseConection(dbConnection);
        }
    }
}

export const GetSuspensionesDao = async () => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `
                    select idSuspension, idEmpleado, CUI, 
                    nombreEmpleado, fechaInicioSuspension, fechaFinSuspension,
                    descripcionSuspension from suspensiones
                    where estado = 'A'
                    order by idSuspension desc;
                    `;

    const [suspensionesLaborales] = await dbConnection.query(query);
    if (suspensionesLaborales.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTEN REGISTROS",
      };
    } else {
      return suspensionesLaborales;
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};