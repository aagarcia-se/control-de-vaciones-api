import { GetSuspensionesDao, ingresarSuspensionDao } from "../../Dao/Suspensiones/Suspensiones.Dao.js";


export const GetSuspensionesServices = async () => {
    try{
          const suspensionesLaborales = await GetSuspensionesDao();
          return suspensionesLaborales;
    }catch(error){
       throw error;
 
    }
  }


export const ingresarSuspensionService = async (data) => {
    try{
          const result = await ingresarSuspensionDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }