import { IngresarPertenenciaSoLi } from "../../Dao/pertenenciaSociolinguistica/pertenenciaSoLi.dao.js";


export const IngresarPertenenciaSoLiServices = async (data) => {
    try{
          const result = await IngresarPertenenciaSoLi(data);
          return result;
    }catch(error){
       throw error;
 
    }
  }