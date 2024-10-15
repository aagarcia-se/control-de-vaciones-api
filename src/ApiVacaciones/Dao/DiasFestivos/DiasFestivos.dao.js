import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const getDiasFestivosDao = async () => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idDiaFestivo, nombreDia, fechaDiaFestivo,
                   descripcion, medioDia from DiasFestivos;
                      `;

    const [diasFestivos] = await dbConnection.query(query);
    if (diasFestivos.length === 0) {
      throw {
        codRes: 409,
        message: "NO HAY DIAS FESTIVOS PROGRAMADOS",
      };
    } else {
      return diasFestivos;
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
