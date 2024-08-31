import { IngresarInformacionDpiDao } from "../../Dao/DPI/InfoDPI.dao.js";

export const IngresarInfoDpiServices = async (data) => {
    try{
          const result = await IngresarInformacionDpiDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }