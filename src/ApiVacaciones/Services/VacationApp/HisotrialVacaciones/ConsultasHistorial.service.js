import { obtenerHistorialPorEmpleadoDao } from "../../../Dao/VacationApp/HistorialVacaciones/ConsultasHistorial.dao.js";

export const obtenerHistorialPorEmpleadoService = async (idEmpleado) => {
    try{
          const historial = await obtenerHistorialPorEmpleadoDao(idEmpleado);
          return historial;
    }catch(error){
       throw error;
 
    }
  }