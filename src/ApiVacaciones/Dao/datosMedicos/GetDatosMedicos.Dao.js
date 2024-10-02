import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const obtenerDatosMedicoDao = async (idInfoPersonal) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idDatoMedico, discapacidad, tipoDiscapacidad, tipoSangre,
                    condicionMedica, tomaMedicina, nombreMedicamento, 
                    sufreAlergia
                    from datosMedicos
                    where idInfoPersonal = ?;
                      `;

    const [datosMedicos] = await dbConnection.query(query, [idInfoPersonal]);
    if (datosMedicos.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE EMPLEADO CON EL ID INGRESADO",
      };
    } else {
      return datosMedicos[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
