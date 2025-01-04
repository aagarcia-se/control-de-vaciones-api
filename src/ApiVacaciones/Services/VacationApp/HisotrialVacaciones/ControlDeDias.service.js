import {
  acreditarDiasPorPeriodoLoteDao,
  ActualizarDiasAcumuladosPorPeriodoDao,
  getUltiaAcreditacionDiasDao,
} from "../../../Dao/VacationApp/HistorialVacaciones/ControlDeDias.dao.js";
import {
  formatearFecha,
  validarFechaUltimaActualizacion,
} from "../../Utils/DateUtils.js";
import { generarDiasAcumuladosPorPeriodo } from "./CalculoDeDias.service.js";

/**
 * Servicio para acreditar días de vacaciones por periodo para un empleado o grupo de empleados.
 *
 * @async
 * @function acreditarDiasPorPeriodoService
 * @param {Object} data - Datos del empleado o grupo de empleados para procesar la acreditación.
 * @param {string} data.fechaIngreso - Fecha de ingreso del empleado (formato YYYY-MM-DD).
 * @param {string} [data.fechaUpdate] - Fecha de última actualización, si corresponde (formato YYYY-MM-DD).
 * @returns {Promise<number>} - Número de filas afectadas o insertadas en la base de datos.
 * @throws {Error} - Lanza un error si falla algún proceso de inserción o actualización.
 */
export const acreditarDiasPorPeriodoService = async (data) => {
  try {
    const ultimoIngresoDeDias = await getUltiaAcreditacionDiasDao(data.idEmpleado);

    // Validar y asignar la fecha de actualización si existe un último ingreso de días
    if (ultimoIngresoDeDias) {
      data.fechaUpdate = formatearFecha(ultimoIngresoDeDias.fechaActualizacion);
    }

    console.log("-----------------------------------------");
    console.log("INICIO ACREDITACION DE DIAS ACUMULADOS");

    // Genera el payload para la acumulación de días por periodo
    const payload = generarDiasAcumuladosPorPeriodo(data);

    // Si hay una fecha de actualización, verifica si es necesaria la actualización
    if (data.fechaUpdate && !validarFechaUltimaActualizacion(data.fechaUpdate)) {
      console.log("No es necesario actualizar ahora");
      return 0;
    }

    // Actualizar o insertar días acumulados
    const resultado = data.fechaUpdate
      ? await ActualizarDiasAcumuladosPorPeriodoDao(payload) // Actualización
      : await acreditarDiasPorPeriodoLoteDao(payload);       // Inserción

    return resultado;
  } catch (error) {
    console.error("Error en la acreditación de días acumulados:", error);
    throw error;
  }
};

