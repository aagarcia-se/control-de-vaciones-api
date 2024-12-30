import { vacacionesReportDao } from "../../Dao/Reports/Reporte-Vacaciones.Dao.js";

export const vacacionesReportService = async (unidad) => {
    try{
          const reporteVacaciones = await vacacionesReportDao(unidad);
          return reporteVacaciones;
    }catch(error){
       throw error;
 
    }
  }