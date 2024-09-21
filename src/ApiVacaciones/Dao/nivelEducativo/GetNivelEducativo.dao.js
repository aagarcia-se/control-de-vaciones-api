import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const obtenerNivelEducativoInfoDao = async (idInfoPersonal) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idNivelEducativo, idInfoPersonal, nivelDeEstudios,
                   ultimoNivelAlcanzado, añoUltimoNivelCursado, Profesion, 
                   numeroColegiado, fechaColegiacion from nivelEducativo
                   where idInfoPersonal = ?;
                   `;

    const [nivelEducativoInf] = await dbConnection.query(query, [idInfoPersonal]);
    if (nivelEducativoInf.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE EMPLEADO CON EL ID INGRESADO",
      };
    } else {
      return nivelEducativoInf[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
