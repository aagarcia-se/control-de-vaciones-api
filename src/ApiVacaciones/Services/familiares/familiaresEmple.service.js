import { IngresarFamiliarDao } from "../../Dao/familiares/familiaresEmple.dao.js";


export const IngresarFamiliarService = async (data) => {
    try{
          const result = await IngresarFamiliarDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }