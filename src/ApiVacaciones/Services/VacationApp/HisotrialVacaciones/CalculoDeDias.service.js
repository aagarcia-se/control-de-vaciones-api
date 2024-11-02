// Importamos Day.js ya que se trabajan con fechas para validaciones de calculos
import dayjs from "dayjs";
import {
  destructurarFecha,
  destructurarFechaActual,
  diasHastaFinDeAnio,
  diasIngresoHastaDiaEnCurso,
  GenerarPeriodo,
} from "../../Utils/DateUtils.js";

/**
 * Calcula el número total de días acumulados en un año atrasado completo,
 * dado un año de ingreso y el año actual.
 *
 * Esta función toma el año en que ocurrió el ingreso y el año actual,
 * y calcula la cantidad total de días acumulados basándose en la suposición
 * de que hay 20 días acumulados por año.
 *
 * @param {number} anioIngreso - El año en que ocurrió el ingreso.
 * @param {number} anioEnCurso - El año actual.
 * @returns {number} El número total de días acumulados por los años completos (365 dias)
 *                   transcurridos desde el año de ingreso hasta el año actual.
 *
 * @example
 * // Supongamos que el año de ingreso es 2022 y el año actual es 2024
 * getDiasAcumuladosAnioAtrasadoCompleto(2022, 2024); // returns 40
 */
const getDiasAcumuladosAnioAtrasadoCompleto = (anioIngreso, anioEnCurso) => {
  let contadorDiasAcuPorAnio = 0;

  contadorDiasAcuPorAnio = Math.round((diasPorAnio * 20) / 365);

  return contadorDiasAcuPorAnio;
};

/**
 * Calcula el número total de días acumulados en un año atrasado incompleto
 * a partir de una fecha de ingreso.
 *
 * Esta función toma una fecha de ingreso y calcula los días restantes hasta
 * el final del año en curso, y luego estima la cantidad de días acumulados
 * basándose en una proporción de 20 días por año completo, ajustando por el
 * número de días en un año (365 días).
 *
 * @param {string} fechaIngreso - La fecha de ingreso en un formato compatible con Day.js.
 * @returns {number} El número estimado de días acumulados en el año incompleto
 *                   desde la fecha de ingreso hasta el final del año actual.
 *
 * @example
 * // Si la fecha de ingreso es "2024-10-01"
 * getDiasAcumuladosAnioAtrasadoIncompleto("2024-10-01"); // returns un número basado en los días restantes hasta el 31 de diciembre de 2024
 */
const getDiasAcumuladosAnioAtrasadoIncompleto = (fechaIngreso) => {
  const cantidadDiasAnioIncompleto = diasHastaFinDeAnio(fechaIngreso);
  return Math.round((cantidadDiasAnioIncompleto * 20) / 365);
};

/**
 * Calcula el número total de días acumulados en un año en curso incompleto
 * a partir de un año especificado.
 *
 * Esta función toma un año como parámetro, calcula los días desde el inicio del año
 * hasta la fecha actual, y estima la cantidad de días acumulados basándose en una
 * proporción de 20 días por año completo, ajustando por el número de días en un año (365 días).
 *
 * @param {number} anio - El año en curso para el cual se calcularán los días acumulados.
 * @returns {{ diasAcumulados: number, sumatoria: number }} Un objeto que contiene:
 *          - diasAcumulados: El número estimado de días acumulados en el año incompleto.
 *          - sumatoria: La suma total calculada antes de redondear.
 *
 * @example
 * // Si el año en curso es 2024
 * getDiasAnioEnCursoIncompleto(2024); // returns un objeto con los días acumulados y la sumatoria
 */
const getDiasAnioEnCursoIncompleto = (anio) => {
  const fechaInicioAnioEnCurso = `${anio}-01-02`;
  const cantidadDiasIngresoAUltimoMes = diasIngresoHastaDiaEnCurso(
    fechaInicioAnioEnCurso
  );

  const sumatoria = (cantidadDiasIngresoAUltimoMes * 20) / 365;
  const diasAcumulados = Math.round(sumatoria);

  return { diasAcumulados, sumatoria };
};

/**
 * Calcula el número total de días acumulados desde el inicio de un año en curso
 * hasta la fecha actual a partir de una fecha de inicio proporcionada.
 *
 * Esta función toma una fecha de inicio como parámetro, calcula los días desde
 * esa fecha hasta el día actual y estima la cantidad de días acumulados
 * basándose en una proporción de 20 días por año completo, ajustando por el
 * número de días en un año (365 días).
 *
 * @param {string} fechaInicioAnioEnCurso - La fecha de inicio del año en curso en un formato compatible con Day.js.
 * @returns {{ diasAcumulados: number, sumatoria: number }} Un objeto que contiene:
 *          - diasAcumulados: El número estimado de días acumulados desde el inicio del año en curso.
 *          - sumatoria: La suma total calculada antes de redondear.
 *
 * @example
 * // Si la fecha de inicio es "2024-01-01"
 * getDiasInicioAnioEnCurso("2024-01-01"); // returns un objeto con los días acumulados y la sumatoria
 */
const getDiasInicioAnioEnCurso = (fechaInicioAnioEnCurso) => {
  const cantidadDiasIngresoAUltimoMes = diasIngresoHastaDiaEnCurso(
    fechaInicioAnioEnCurso
  );

  const sumatoria = (cantidadDiasIngresoAUltimoMes * 20) / 365;
  const diasAcumulados = Math.round(sumatoria);

  return { diasAcumulados, sumatoria };
};

/**
 * Genera un payload con información sobre días acumulados de vacaciones por periodo
 * para años atrasados a partir de la fecha de ingreso del empleado.
 *
 * Esta función toma un objeto de datos que incluye la fecha de ingreso y otros detalles
 * del empleado, y genera un array de objetos que representan el acumulado de días de
 * vacaciones para cada año desde la fecha de ingreso hasta el año actual.
 *
 * @param {Object} data - El objeto que contiene la información del empleado.
 * @param {string} data.fechaIngreso - La fecha de ingreso del empleado en formato compatible con Day.js.
 * @param {number} data.idEmpleado - El ID del empleado.
 * @param {number} data.idInfoPersonal - El ID de la información personal del empleado.
 * @returns {Object[]} Un array de objetos, cada uno representando el periodo de vacaciones
 * acumuladas por año, con información como el ID del empleado, el año del periodo,
 * días acumulados y la sumatoria calculada.
 *
 * @example
 * // Datos de entrada
 * const data = {
 *   fechaIngreso: "2020-05-15",
 *   idEmpleado: 1,
 *   idInfoPersonal: 10
 * };
 *
 * // Generar el payload
 * const payload = generarPayloadPorPeriodoAniosAtrasados(data);
 * // Returns un array con los datos acumulados para cada año desde 2020 hasta el año actual
 */
const generarPayloadPorPeriodoAniosAtrasados = (data) => {
  const { anio: anioIngreso } = destructurarFecha(data.fechaIngreso);
  const { anioEnCurso } = destructurarFechaActual();
  const periodoVacaciones = GenerarPeriodo(data.fechaIngreso);
  const payload = [];

  periodoVacaciones.forEach((anio, index) => {
    let diasPeriodo = 0;
    let sumatoriaCalculo = 0;

    // Determinar días acumulados según el año y el periodo
    if (anio === anioIngreso) {
      diasPeriodo = getDiasAcumuladosAnioAtrasadoIncompleto(data.fechaIngreso);
    }

    if (anio !== anioEnCurso && anio !== anioIngreso) {
      const diasPorAnio = obtenerDiasPorAnio(anio);
      diasPeriodo = getDiasAcumuladosAnioAtrasadoCompleto(diasPorAnio);
    }

    if (anio === anioEnCurso) {
      const diasAnioEnCurso = getDiasAnioEnCursoIncompleto(anioEnCurso);
      diasPeriodo = diasAnioEnCurso.diasAcumulados;
      sumatoriaCalculo = diasAnioEnCurso.sumatoria;
    }

    // Crear el objeto para cada periodo
    const payloadObj = {
      idEmpleado: data.idEmpleado,
      idInfoPersonal: data.idInfoPersonal,
      periodo: index + 1,
      anioPeriodo: anio,
      diasPeriodo,
      sumatoriaCalculo,
      fechaActualizacion: dayjs().format("YYYY-MM-DD"),
      fechaAcreditacion: dayjs().format("YYYY-MM-DD"),
    };

    payload.push(payloadObj);
  });

  return payload;
};

/**
 * Genera un payload con la información del empleado y los días acumulados de vacaciones
 * en el año en curso, basado en la fecha de actualización.
 *
 * @param {Object} data - El objeto que contiene la información del empleado.
 * @param {string} data.fechaUpdate - La fecha de actualización en formato compatible con Day.js.
 * @param {number} data.idEmpleado - El ID del empleado.
 * @param {number} data.idInfoPersonal - El ID de la información personal del empleado.
 * @returns {Object[]} Un array con un objeto que representa la información de días acumulados
 * de vacaciones del empleado para el periodo actual, o un array vacío si el año de actualización
 * no coincide con el año en curso.
 *
 * @example
 * // Datos de entrada
 * const data = {
 *   fechaUpdate: "2024-10-30",
 *   idEmpleado: 1,
 *   idInfoPersonal: 10
 * };
 *
 * // Generar el payload
 * const payload = generarPayloadPeriodoAnioEncurso(data);
 * // Returns un array con la información de días acumulados para el año 2024
 */
const generarPayloadPeriodoAnioEncurso = (data) => {
  const { anioEnCurso } = destructurarFechaActual(); // Año en curso desestructurado
  const { anio: anioUpdate } = destructurarFecha(data.fechaUpdate); // Año de la última actualización

  // Verifica que el año de la última actualización coincide con el año en curso
  if (anioUpdate !== anioEnCurso) {
    throw new Error(
      "El año de actualización debe coincidir con el año en curso"
    );
    return [];
  }

  // Generar periodos de vacaciones basados en la fecha de actualización
  const periodoVacaciones = GenerarPeriodo(data.fechaUpdate);

  // Calcular los días acumulados en el año en curso
  const diasAcumuladosAnioEncurso = getDiasAnioEnCursoIncompleto(anioUpdate);

  // Construir el objeto del payload
  const payload = {
    idEmpleado: data.idEmpleado,
    idInfoPersonal: data.idInfoPersonal,
    periodo: 1,
    anioPeriodo: periodoVacaciones[0],
    diasPeriodo: diasAcumuladosAnioEncurso.diasAcumulados,
    sumatoriaCalculo: diasAcumuladosAnioEncurso.sumatoria,
    fechaActualizacion: dayjs().format("YYYY-MM-DD"),
    fechaAcreditacion: dayjs().format("YYYY-MM-DD"),
  };

  return payload;
};

/**
 * Genera un payload con la información del empleado y los días acumulados de vacaciones
 * en el año en curso, asegurando que el año de ingreso coincida con el año en curso.
 *
 * @param {Object} data - El objeto que contiene la información del empleado.
 * @param {string} data.fechaIngreso - La fecha de ingreso en formato compatible con Day.js.
 * @param {number} data.idEmpleado - El ID del empleado.
 * @param {number} data.idInfoPersonal - El ID de la información personal del empleado.
 * @returns {Object[]} Un array con un objeto que representa la información de días acumulados
 * de vacaciones del empleado para el periodo actual, o un array vacío si el año de ingreso
 * no coincide con el año en curso.
 *
 * @example
 * // Datos de entrada
 * const data = {
 *   fechaIngreso: "2024-01-15",
 *   idEmpleado: 1,
 *   idInfoPersonal: 10
 * };
 *
 * // Generar el payload
 * const payload = generarPayloadAnioEnCursoNoInicio(data);
 * // Returns un array con la información de días acumulados para el año 2024
 */
const generarPayloadAnioEnCursoNoInicio = (data) => {
  const { anioEnCurso } = destructurarFechaActual(); // Año en curso desestructurado
  const { anio: anioIngreso } = destructurarFecha(data.fechaIngreso); // Año de la última actualización

  // Verifica que el año de la última actualización coincide con el año en curso
  if (anioIngreso !== anioEnCurso) {
    throw new Error("El año de ingreso debe coincidir con el año en curso");
  }

  // Generar periodos de vacaciones basados en la fecha de actualización
  const periodoVacaciones = GenerarPeriodo(data.fechaIngreso);

  // Calcular los días acumulados en el año en curso
  const diasAcumuladosAnioEncurso = getDiasInicioAnioEnCurso(data.fechaIngreso);

  // Construir el objeto del payload
  const payload = [
    {
      idEmpleado: data.idEmpleado,
      idInfoPersonal: data.idInfoPersonal,
      periodo: 1,
      anioPeriodo: periodoVacaciones[0],
      diasPeriodo: diasAcumuladosAnioEncurso.diasAcumulados,
      sumatoriaCalculo: diasAcumuladosAnioEncurso.sumatoria,
      fechaActualizacion: dayjs().format("YYYY-MM-DD"),
      fechaAcreditacion: dayjs().format("YYYY-MM-DD"),
    },
  ];

  return payload;
};

/**
 * Genera un payload con los días acumulados de vacaciones por periodo
 * según la información del empleado y la fecha de actualización.
 *
 * @param {Object} data - Objeto que contiene la información del empleado.
 * @param {string} data.fechaIngreso - La fecha de ingreso en formato compatible con Day.js.
 * @param {number} data.idEmpleado - El ID del empleado.
 * @param {number} data.idInfoPersonal - El ID de la información personal del empleado.
 * @param {string} [data.fechaUpdate] - La fecha de la última actualización en formato compatible con Day.js.
 * @returns {Object[]} Un array con el payload generado o un array vacío si no se pueden generar datos.
 *
 * @example
 * // Datos de entrada
 * const data = {
 *   fechaIngreso: "2024-01-15",
 *   idEmpleado: 1,
 *   idInfoPersonal: 10,
 *   fechaUpdate: "2024-10-30"
 * };
 *
 * // Generar los días acumulados por periodo
 * const payload = generarDiasAcumuladosPorPeriodo(data);
 * // Returns un array con la información de días acumulados según la fecha de actualización
 */
export const generarDiasAcumuladosPorPeriodo = (data) => {
  const { anioEnCurso } = destructurarFechaActual(); // Año en curso desestructurado
  const { anio: anioIngreso } = destructurarFecha(data.fechaIngreso); // Año de la última actualización
  const { fechaUpdate } = data;

  // Determinar el payload según la existencia de `fechaUpdate`
  if (fechaUpdate) {
    return generarPayloadPeriodoAnioEncurso(data);
  }

  if (anioIngreso === anioEnCurso) {
    return generarPayloadAnioEnCursoNoInicio(data);
  }

  return generarPayloadPorPeriodoAniosAtrasados(data);
};

//Funciones para el debito de dias disponibles de vacaciones
/**
 * Calcula los días tomados de cada periodo para cubrir una solicitud de vacaciones.
 *
 * @param {Array<Object>} historial - Lista de periodos con información de días disponibles.
 * @param {number} diasSolicitados - Cantidad de días de vacaciones solicitados.
 * @returns {Array<Object>|Object} - Si se pueden cubrir los días solicitados, retorna un array con los periodos y los días tomados de cada uno.
 *                                   Si no hay suficientes días, retorna un objeto con un mensaje, la cantidad de días posibles y los detalles de los periodos utilizados.
 *
 * @example
 * const historial = [
 *   { periodo: "2023", diasDisponibles: 8 },
 *   { periodo: "2024", diasDisponibles: 15 }
 * ];
 *
 * calcularDiasPorPeriodo(historial, 10);
 * // Retorna:
 * // [
 * //   { periodo: "2023", diasTomados: 8 },
 * //   { periodo: "2024", diasTomados: 2 }
 * // ]
 *
 * calcularDiasPorPeriodo(historial, 30);
 * // Retorna:
 * // {
 * //   mensaje: "No hay suficientes días disponibles para cubrir la solicitud.",
 * //   diasPosibles: 23,
 * //   periodos: [
 * //     { periodo: "2023", diasTomados: 8 },
 * //     { periodo: "2024", diasTomados: 15 }
 * //   ]
 * // }
 */
export const calcularDiasPorPeriodo = (historial, diasSolicitados) => {
  const periodosConDias = historial
    .filter((item) => item.diasDisponibles > 0)
    .sort((a, b) => parseInt(a.periodo) - parseInt(b.periodo)); // Orden ascendente por periodo

  const resultado = [];
  let diasRestantes = diasSolicitados;
  let diasTotalesDisponibles = 0;

  for (const periodo of periodosConDias) {
    if (diasRestantes <= 0) break; // Ya cubrimos todos los días solicitados

    if (periodo.diasDisponibles >= diasRestantes) {
      // Hay suficientes días en este periodo para cubrir los días restantes solicitados
      resultado.push({
        periodo: periodo.periodo,
        diasTomados: diasRestantes,
      });
      diasRestantes = 0; // Solicitud cubierta completamente
    } else {
      // No hay suficientes días en este periodo, tomamos todos los días disponibles
      resultado.push({
        periodo: periodo.periodo,
        diasTomados: periodo.diasDisponibles,
      });
      diasRestantes -= periodo.diasDisponibles; // Restamos los días que tomamos
    }

    diasTotalesDisponibles += periodo.diasDisponibles;
  }

  // Verificar si se pueden cubrir todos los días solicitados
  if (diasSolicitados > diasTotalesDisponibles) {
    return {
      mensaje: "No hay suficientes días disponibles para cubrir la solicitud.",
      diasPosibles: diasTotalesDisponibles, // Días que realmente se pueden tomar
      periodos: resultado,
    };
  }

  return resultado; // Retornar el detalle de los periodos con los días tomados
}

/**
 * Calcula los días tomados de cada periodo y los días restantes después de cubrir una solicitud de vacaciones.
 *
 * @param {Array<Object>} historial - Lista de periodos con información de días disponibles.
 * @param {number} diasSolicitados - Cantidad de días de vacaciones solicitados.
 * @returns {Array<Object>|Object} - Si se pueden cubrir los días solicitados, retorna un array con los periodos, los días tomados de cada uno, y los días restantes.
 *                                   Si no hay suficientes días, retorna un objeto con un mensaje, la cantidad de días posibles y los detalles de los periodos no modificados.
 *
 * @example
 * const historial = [
 *   { periodo: "2023", diasDisponibles: 8 },
 *   { periodo: "2024", diasDisponibles: 15 }
 * ];
 *
 * obtenerPeriodosParaVacaciones(historial, 10);
 * // Retorna:
 * // [
 * //   { periodo: "2023", diasTomados: 8, diasDisponibles: 0 },
 * //   { periodo: "2024", diasTomados: 2, diasDisponibles: 13 }
 * // ]
 *
 * obtenerPeriodosParaVacaciones(historial, 30);
 * // Retorna:
 * // {
 * //   mensaje: "No hay suficientes días disponibles para cubrir la solicitud.",
 * //   diasPosibles: 23,
 * //   periodos: [
 * //     { periodo: "2023", diasTomados: 0, diasDisponibles: 8 },
 * //     { periodo: "2024", diasTomados: 0, diasDisponibles: 15 }
 * //   ]
 * // }
 */
export const  obtenerPeriodosParaVacaciones = (historial, diasSolicitados) => {
  const periodosConDias = historial
    .filter(item => item.diasDisponibles > 0)
    .sort((a, b) => parseInt(a.periodo) - parseInt(b.periodo));

  const resultado = [];
  let diasRestantes = diasSolicitados;
  let diasTotalesDisponibles = 0;

  for (const periodo of periodosConDias) {
    diasTotalesDisponibles += periodo.diasDisponibles;
    if (diasRestantes <= 0) break;

    if (periodo.diasDisponibles >= diasRestantes) {
      resultado.push({
        periodo: periodo.periodo,
        diasTomados: diasRestantes,
        diasDisponibles: periodo.diasDisponibles - diasRestantes
      });
      diasRestantes = 0;
    } else {
      resultado.push({
        periodo: periodo.periodo,
        diasTomados: periodo.diasDisponibles,
        diasDisponibles: 0
      });
      diasRestantes -= periodo.diasDisponibles;
    }
  }

  if (diasSolicitados > diasTotalesDisponibles) {
    return {
      mensaje: "No hay suficientes días disponibles para cubrir la solicitud.",
      diasPosibles: diasTotalesDisponibles,
      periodos: historial.map(periodo => ({
        periodo: periodo.periodo,
        diasTomados: 0,
        diasDisponibles: periodo.diasDisponibles
      }))
    };
  }

  return resultado;
}
