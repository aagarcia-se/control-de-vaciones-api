import { getSolicitudesByIdDao } from "../../Dao/VacationApp/GetSolicitudById.Dao.js";


export const getSolicitudesByIdServices = async (idEmpleado, idInfoPersonal) => {
    try{
          const solicitud = await getSolicitudesByIdDao(idEmpleado, idInfoPersonal);
          return solicitud;
    }catch(error){
       throw error;
 
    }
  }