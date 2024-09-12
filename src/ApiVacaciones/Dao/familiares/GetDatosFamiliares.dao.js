import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const obtenerFamiliaresDao = async (idEmpleado) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idInfoPersonal, nombreFamiliar,
                    telefono, parentesco, fechaNacimiento
                    from familiaresDeEmpleados
                    where idInfoPersonal = ?; 

                      `;

    const [familiares] = await dbConnection.query(query, [idEmpleado]);
    if (familiares.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTEN FAMILIARES PARA EL EMPLEADO INGRESADO",
      };
    } else {
      return familiares;
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
