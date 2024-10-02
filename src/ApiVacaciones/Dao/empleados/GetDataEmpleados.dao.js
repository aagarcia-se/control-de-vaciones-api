import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

let dbConnection;

export const getDatosContactoEmpleadoDao = async (idInfoPersonal) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query =
      "select numeroCelular, correoPersonal from infoPersonalEmpleados where idInfoPersonal = ?;";
    const [contactoEmpleado] = await dbConnection.query(query, [
      idInfoPersonal,
    ]);
    if (contactoEmpleado.length === 0) {
      throw {
        codRes: 409,
        message: "NUMERO DOCUMENTO INGRESADO YA EXISTE",
      };
    } else {
      return contactoEmpleado[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};

export const employeesListDao = async () => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `
                        SELECT 
                            em.idEmpleado, 
                            dp.numeroDocumento,
                            CONCAT(
                                inf.primerNombre, ' ', inf.segundoNombre, ' ', 
                                inf.primerApellido, ' ', inf.segundoApellido
                            ) AS Nombres,
                            inf.correoPersonal AS correo, 
                            inf.numeroCelular AS celular,
                            em.puesto AS puesto, 
                            em.unidad AS unidad, 
                            em.renglon AS renglon,
                            em.tipoContrato AS tipoContrato, 
                            DATE_FORMAT(em.fechaIngreso, '%d/%m/%Y') AS fechaIngresoLabores
                        FROM 
                            dpiEmpleados dp
                        INNER JOIN 
                            infoPersonalEmpleados inf ON dp.idDpi = inf.idDpi
                        INNER JOIN 
                            empleados em ON inf.idInfoPersonal = em.idInfoPersonal
                        ORDER BY 
                            em.idEmpleado DESC;
                    `;

    const emplloyeesList = await dbConnection.query(query);
    if (emplloyeesList.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTEN EMPLEADOS",
      };
    } else {
      return emplloyeesList[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};



export const obtenerDatosLaboralesDao = async (idInfoPersonal) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idEmpleado, puesto, salario, fechaIngreso, 
                    correoInstitucional, extensionTelefonica, 
                    unidad, renglon, observaciones, coordinacion, tipoContrato,
                    numeroCuentaCHN, numeroContrato, numeroActa,
                    numeroAcuerdo
                    from empleados
                    where idInfoPersonal = ?;
                      `;

    const [datosLaborales] = await dbConnection.query(query, [idInfoPersonal]);
    if (datosLaborales.length === 0) {
      throw {
        codRes: 409,
        message: "NO EXISTE EMPLEADO CON EL ID INGRESADO",
      };
    } else {
      return datosLaborales[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};



