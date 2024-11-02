// Importamos Day.js
import dayjs from "dayjs";

/**
 * Descompone una fecha dada en día, mes y año.
 *
 * Esta función toma una fecha de entrada y extrae el día, mes y año, devolviéndolos en un objeto.
 *
 * @param {string} fecha - La fecha de entrada en un formato compatible con Day.js.
 * @returns {Object} Un objeto con las propiedades del día, mes y año de la fecha dada.
 * @returns {number} return.dia - El día del mes de la fecha.
 * @returns {number} return.mes - El mes de la fecha (1-12).
 * @returns {number} return.anio - El año de la fecha.
 *
 * @example
 * // Supongamos que la fecha es "2024-10-30"
 * destructurarFecha("2024-10-30"); // returns { dia: 30, mes: 10, anio: 2024 }
 */
export const destructurarFecha = (fecha) => {
  const date = dayjs(fecha);

  const dia = date.date();
  const mes = date.month() + 1;
  const anio = date.year();

  return { dia, mes, anio };
};

/**
 * Obtiene y devuelve el día, mes y año de la fecha actual.
 *
 * Esta función descompone la fecha actual en día, mes y año, y retorna estos valores
 * en un objeto.
 *
 * @returns {Object} Un objeto con el día, mes y año actuales.
 * @returns {number} return.diaEnCurso - El día actual del mes.
 * @returns {number} return.mesEnCurso - El mes actual (1-12).
 * @returns {number} return.anioEnCurso - El año actual.
 *
 * @example
 * // Si hoy es 2024-10-30
 * destructurarFechaActual(); // returns { diaEnCurso: 30, mesEnCurso: 10, anioEnCurso: 2024 }
 */
export const destructurarFechaActual = () => {
  const fechaActual = dayjs();

  const diaEnCurso = fechaActual.date();
  const mesEnCurso = fechaActual.month() + 1;
  const anioEnCurso = fechaActual.year();

  return { diaEnCurso, mesEnCurso, anioEnCurso };
};

/**
 * Calcula el número de días desde una fecha de inicio hasta el final del año de esa fecha.
 *
 * Esta función toma una fecha de inicio y calcula cuántos días quedan desde esa fecha
 * hasta el 31 de diciembre del mismo año, incluyendo el día de inicio.
 *
 * @param {string} fecha - Fecha de inicio en un formato compatible con Day.js (2024-1-1).
 * @returns {number} Número de días desde la fecha de inicio hasta el final del año.
 *
 * @example
 * // Supongamos que hoy es 2024-10-01
 * // Devuelve el número de días restantes hasta el 31 de diciembre de 2024.
 * diasHastaFinDeAnio("2024-10-01"); // returns 92
 */
export const diasHastaFinDeAnio = (fecha) => {
  const fechaInicio = dayjs(fecha);
  const finDeAnio = dayjs(`${fechaInicio.year()}-12-31`);

  return finDeAnio.diff(fechaInicio, "day") + 1;
};

/**
 * Calcula la cantidad de días desde una fecha de ingreso hasta la fecha actual.
 *
 * La fecha de ingreso proporcionada debe estar dentro del año en curso.
 * Si no es así, se lanzará una excepción.
 *
 * @param {string} fecha - Fecha de ingreso en formato compatible con Day.js, (2024-1-1).
 * @returns {number} Número de días desde la fecha de ingreso hasta hoy, incluido el día de ingreso.
 * @throws {Error} Lanza un error si la fecha de ingreso no es del año actual.
 */
export const diasIngresoHastaDiaEnCurso = (fecha) => {
  const fechaIngreso = dayjs(fecha); // Convertimos la fecha de ingreso a Day.js
  const fechaActual = dayjs(); // Fecha actual

  // Verificamos que la fecha de ingreso sea del mismo año que la fecha actual
  if (fechaIngreso.year() !== fechaActual.year()) {
    throw new Error("La fecha de ingreso debe estar en el año actual.");
  }

  // Calculamos la diferencia en días hasta el día actual, incluyendo el día de ingreso
  const diasDiferencia = fechaActual.diff(fechaIngreso, "day") + 1;

  return diasDiferencia;
};

/**
 * Calcula el número total de días en los meses completos desde una fecha de inicio hasta el mes anterior al mes actual.
 *
 * Esta función toma una fecha de inicio y calcula el total de días en los meses completos
 * que han transcurrido desde esa fecha hasta el mes anterior al mes en curso. Si la fecha
 * de inicio pertenece al mismo mes o un mes posterior al mes actual, lanza un error.
 *
 * @param {string} fecha - La fecha de inicio en un formato compatible con Day.js.
 * @returns {number} El número total de días en los meses completos entre la fecha de inicio y el mes anterior al mes actual.
 * @throws {Error} Si la fecha de inicio es del mismo mes o un mes posterior al mes actual.
 *
 * @example
 * // Si hoy es 2024-10-30 y la fecha de inicio es "2024-06-15"
 * diasMesesAnteriores("2024-06-15"); // returns el total de días desde junio hasta septiembre de 2024
 */
export const diasMesesAnteriores = (fecha) => {
  const fechaInicio = dayjs(fecha);
  const fechaActual = dayjs();

  if (fechaInicio >= fechaActual.startOf("month")) {
    throw new Error(
      "La fecha de ingreso debe ser al menos un mes antes del mes actual."
    );
  }

  // Definimos el mes de inicio y el último mes completo antes del mes actual
  const mesInicio = fechaInicio.startOf("month");
  const ultimoMesCompleto = fechaActual.subtract(1, "month").endOf("month");

  let totalDias = 0;
  let mesActual = mesInicio;

  while (mesActual <= ultimoMesCompleto) {
    totalDias += mesActual.daysInMonth(); // Suma los días del mes actual
    mesActual = mesActual.add(1, "month"); // Pasamos al siguiente mes
  }

  return totalDias;
};

/**
 * Calcula el número total de días en un año específico.
 *
 * Esta función toma un año como parámetro y calcula el número de días
 * desde el 1 de enero hasta el 31 de diciembre de ese año, incluyendo
 * ambos días.
 *
 * @param {number} anio - El año para el cual se calcularán los días.
 * @returns {number} El número total de días en el año especificado.
 *
 * @example
 * // Para el año 2024
 * obtenerDiasPorAnio(2024); // returns 366, dado que 2024 es un año bisiesto
 */
export const obtenerDiasPorAnio = (anio) => {
  const inicioAnio = dayjs(`${anio}-01-01`);
  const finAnio = dayjs(`${anio}-12-31`);
  return finAnio.diff(inicioAnio, "day") + 1;
};

/**
 * Genera un array de años desde un año de ingreso especificado hasta el año actual.
 *
 * Esta función toma una fecha como parámetro, extrae el año de la fecha de ingreso,
 * y genera un array que contiene todos los años desde el año de ingreso hasta el
 * año en curso, incluyendo ambos extremos.
 *
 * @param {string} fecha - La fecha de ingreso en un formato compatible con Day.js.
 * @returns {number[]} Un array de años desde el año de ingreso hasta el año en curso.
 *
 * @example
 * // Si la fecha de ingreso es "2020-05-15"
 * GenerarPeriodo("2020-05-15"); // returns [2020, 2021, 2022, 2023, 2024] (suponiendo que el año actual es 2024)
 */
export const GenerarPeriodo = (fecha) => {
  const { anio } = destructurarFecha(fecha);
  const { anioEnCurso } = destructurarFechaActual();

  // Crear el array de años desde el año de ingreso hasta el año en curso
  const periodos = Array.from(
    { length: anioEnCurso - anio + 1 },
    (_, i) => anio + i
  );

  return periodos;
};

/**
 * Valida si la fecha de última actualización corresponde a un mes anterior al mes actual.
 *
 * Esta función utiliza dos funciones auxiliares, `destructurarFecha` y `destructurarFechaActual`,
 * para obtener el mes de la fecha de actualización y el mes actual respectivamente.
 * Si el mes actual es mayor que el mes de actualización, se considera que es necesario
 * realizar una actualización.
 *
 * @param {string} fechaActualizacion - La fecha de última actualización en formato de fecha
 * (debe ser compatible con el formato esperado por `destructurarFecha`).
 *
 * @returns {boolean} - Devuelve `true` si el mes actual es mayor que el mes de
 * la última actualización, lo que indica que se debe actualizar. De lo contrario, devuelve `false`.
 */
export const validarFechaUltimaActualizacion = (fechaActualizacion) => {
  const { mes: mesUpdate } = destructurarFecha(fechaActualizacion); // Año de la última actualización
  const { mesEnCurso } = destructurarFechaActual(); // Año en curso desestructurado

  let siSeActualiza = false;

  if (mesEnCurso > mesUpdate) {
    siSeActualiza = true;
  }

  return siSeActualiza;
};

/**
 * Formatea una fecha al formato "YYYY-MM-DD".
 *
 * @param {string|Date} fecha - La fecha a formatear, en formato de cadena o como objeto Date.
 * @returns {string} - La fecha formateada como "YYYY-MM-DD".
 */
export const formatearFecha = (fecha) => {
  return dayjs(fecha).format("YYYY-MM-DD");
};
