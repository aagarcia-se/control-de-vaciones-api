import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const obtenerInfoPersonalDao = async (idEmpleado) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idInfoPersonal, primerNombre, segundoNombre, tercerNombre,  
                    primerApellido, segundoApellido, apellidoCasada,
                    numeroCelular, correoPersonal, direccionResidencia, estadoCivil, genero,
                    nit, numAfiliacionIgss, fechaNacimiento
                    from infoPersonalEmpleados
                    where idDpi = ?;
                      `;

    const [infoPersonal] = await dbConnection.query(query, [idEmpleado]);
    if (infoPersonal.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE EMPLEADO CON EL ID INGRESADO",
      };
    } else {
      return infoPersonal[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
