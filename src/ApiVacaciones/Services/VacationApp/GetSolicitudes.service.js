import { getSolicitudesDao } from "../../Dao/VacationApp/GetSolicitudes.Dao.js";



export const getSolicitudesServices = async (unidadSolicitud) => {
    try{
          const solicitudes = await getSolicitudesDao(unidadSolicitud);
          return solicitudes;
    }catch(error){
       throw error;
 
    }
  }