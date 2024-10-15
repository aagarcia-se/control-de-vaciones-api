import { getDiasFestivosDao } from "../../Dao/DiasFestivos/DiasFestivos.dao.js";


export const getDiasFestivosServices = async () => {
    try{
          const diasFestivos = await getDiasFestivosDao();
          return diasFestivos;
    }catch(error){
       throw error;
 
    }
  }