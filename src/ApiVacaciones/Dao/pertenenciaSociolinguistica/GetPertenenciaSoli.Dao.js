import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const obtenerPertenenciaSoliDao = async (idInfoPersonal) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idPertenenciaSoLi, etnia, 
                    comunidadLinguistica
                    from pertenenciaSociolinguistica
                    where idInfoPersonal = ?;
                      `;

    const [infoSoli] = await dbConnection.query(query, [idInfoPersonal]);
    if (infoSoli.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE EMPLEADO CON EL ID INGRESADO",
      };
    } else {
      return infoSoli[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};