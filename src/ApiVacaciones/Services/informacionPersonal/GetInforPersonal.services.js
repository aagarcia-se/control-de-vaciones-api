import { obtenerInfoPersonalDao } from "../../Dao/informacionPersonal/GetInfoPersonal.dao.js";



export const obtenerInfoPersonalServices = async (idEmpleado) => {
    try{
          const infoPersonal = await obtenerInfoPersonalDao(idEmpleado);
          return infoPersonal;
    }catch(error){
       throw error;
 
    }
  }