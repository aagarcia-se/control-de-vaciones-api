import { obtenerPertenenciaSoliDao } from "../../Dao/pertenenciaSociolinguistica/GetPertenenciaSoli.Dao.js";


export const obtenerPertenenciaSoliServices = async (idInfoPersonal) => {
    try{
          const infoSoli = await obtenerPertenenciaSoliDao(idInfoPersonal);
          return infoSoli;
    }catch(error){
       throw error;
 
    }
  }