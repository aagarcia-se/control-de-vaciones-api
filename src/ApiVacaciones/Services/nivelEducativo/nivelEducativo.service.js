import { IngresarNivelEducativoDao } from "../../Dao/nivelEducativo/nivelEducativo.dao.js";


export const IngresarNivelEducativoService = async (data) => {
    try{
          const result = await IngresarNivelEducativoDao(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }