import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const registrarCoordinadorDao = async (data) => {
    try {
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const queryInsert = `
                            insert into coordinadores (idEmpleado, nombreCoordinador, 
                            coordinadorUnidad, correoCoordinador)
                            values (?, ?, ?, ?);
                    `;
 
        const [result] = await dbConnection.query(queryInsert, [
            data.idEmpleado,
            data.nombreCoordinador,
            data.coordinadorUnidad,
            data.correoCoordinador,
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


export const consultarCoordinadorDao = async (coordinadorUnidad) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `
                        select idCoordinador, idEmpleado, nombreCoordinador, 
                        coordinadorUnidad, correoCoordinador from coordinadores
                        where coordinadorUnidad = ?
                        and estado = 'A';
                    `;

    const [coordinador] = await dbConnection.query(query, [coordinadorUnidad]);
    if (coordinador.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTEN REGISTROS PARA EL COORDINADOR INGRESADO",
      };
    } else {
      return coordinador[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};