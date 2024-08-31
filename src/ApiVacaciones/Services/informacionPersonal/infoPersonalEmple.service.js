import { IngresarInfoPersonalDao } from "../../Dao/informacionPersonal/infoPersonalEmple.dao.js";


export const IngresarInfoPersonalService = async (data) => {
    try{
          const result = await IngresarInfoPersonalDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }