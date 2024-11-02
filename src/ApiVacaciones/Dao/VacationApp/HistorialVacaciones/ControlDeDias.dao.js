import {
  CloseConection,
  OpenConection,
} from "../../Connection/ConexionV.dao.js";

/**
 * Inserta múltiples registros de vacaciones en la tabla `historial_vacaciones` para un lote de periodos.
 *
 * @async
 * @function acreditarDiasPorPeriodoLoteDao
 * @param {Array<Object>} data - Array de objetos que contienen los datos de cada empleado y el periodo a acreditar.
 * @param {number} data[].idEmpleado - ID del empleado.
 * @param {number} data[].idInfoPersonal - ID de la información personal del empleado.
 * @param {number} data[].periodo - Periodo al que se están acreditando los días de vacaciones.
 * @param {number} data[].diasPeriodo - Días acreditados y disponibles para el periodo.
 * @param {number} data[].sumatoriaCalculo - Cálculo acumulativo de los días.
 * @param {string} data[].fechaAcreditacion - Fecha en la que se acredita el periodo (formato YYYY-MM-DD).
 * @returns {Promise<number>} - Número de registros insertados exitosamente.
 * @throws {Error} - Lanza un error si falla la conexión o la inserción.
 */
export const acreditarDiasPorPeriodoLoteDao = async (data) => {
  if (!Array.isArray(data)) {
    throw new Error("El parámetro 'data' debe ser un arreglo de objetos.");
  }
  let Connection;
  try {
    Connection = await OpenConection();
    let contadorDeInserciones = 0;

    // Recorrer cada objeto dentro del array `data`
    for (const item of data) {
      await Connection.query(
        `INSERT INTO historial_vacaciones 
            (idEmpleado, idInfoPersonal, periodo, 
             diasAcreditados, diasDisponibles, 
             sumatoriaDias, fechaActualizacion, fechaAcreditacion) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [
          item.idEmpleado,
          item.idInfoPersonal,
          item.anioPeriodo,
          item.diasPeriodo, // `diasAcreditados` es `diasPeriodo` aquí
          item.diasPeriodo, // `diasDisponibles` es igual a `diasPeriodo`
          item.sumatoriaCalculo,
          item.fechaActualizacion,
          item.fechaAcreditacion,
        ]
      );
      contadorDeInserciones++;
    }

    await Connection.commit();
    return contadorDeInserciones; // Retorna el número de inserciones realizadas
  } catch (error) {
    if (Connection) await Connection.rollback(); // Deshacer cambios en caso de error
    throw error;
  } finally {
    CloseConection(Connection);
  }
};

export const acreditarDiasPorPeriodoDao = async (data) => {
  let Connection;
  try {
    Connection = await OpenConection();
    const [result] = await Connection.query(
      `insert into historial_vacaciones  (idEmpleado, idInfoPersonal, periodo, 
                                                diasAcreditados, diasDisponibles,
                                                sumatoriaDias, fechaActualizacion, fechaAcreditacion)
                                                values (?, ?, ?, ?, ?, ?, ?, ?); `,
      [
        data.idEmpleado,
        data.idInfoPersonal,
        data.anioPeriodo,
        data.diasPeriodo, // `diasAcreditados` es `diasPeriodo` aquí
        data.diasPeriodo, // `diasDisponibles` es igual a `diasPeriodo`
        data.sumatoriaCalculo,
        data.fechaActualizacion,
        data.fechaAcreditacion,
      ]
    );
    await Connection.commit();
    return result.insertId;
  } catch (error) {
    throw error;
  } finally {
    CloseConection(Connection);
  }
};

export const ActualizarDiasAcumuladosPorPeriodoDao = async (data) => {
  let Connection;
  try {
    Connection = await OpenConection();
    const [result] = await Connection.query(
      `update historial_vacaciones set diasAcreditados = ?, 
                diasDisponibles   = ?, sumatoriaDias = ?, 
                fechaActualizacion = ?
                where periodo = ?
                and idEmpleado = ?
                and idInfoPersonal = ?;
                                            `,
      [
        data.diasPeriodo,
        data.diasPeriodo,
        data.sumatoriaCalculo,
        data.fechaActualizacion,
        data.anioPeriodo,
        data.idEmpleado,
        data.idInfoPersonal,
      ]
    );
    await Connection.commit();
    return result.affectedRows;
  } catch (error) {
    throw error;
  } finally {
    CloseConection(Connection);
  }
};





let dbConnection;

export const getUltiaAcreditacionDiasDao = async (idEmpleado) => {
  try {
    dbConnection = await OpenConection();
    await dbConnection.beginTransaction();

    const query = `select idHistorial, idEmpleado, idInfoPersonal, periodo, diasAcreditados,
                    diasDisponibles, sumatoriaDias, fechaActualizacion
                    from historial_vacaciones
                    where idEmpleado = ?
                    and tipoRegistro = 1
                    order by idHistorial desc
                    limit 1;
                    `;

    const [ultimoIngreso] = await dbConnection.query(query, [idEmpleado]);
    if (ultimoIngreso.length === 0) {
      return 0;
    } else {
      return ultimoIngreso[0];
    }
  } catch (error) {
    throw error;
  } finally {
    if (dbConnection) {
      await CloseConection(dbConnection);
    }
  }
};
