import { getUnidadesDao } from "../../dao/unidades/unidades.dao.js";



export const getUnidadesServices = async () =>{
    try{
       const religiones  = await getUnidadesDao();
       return religiones;
    }catch(error){
       return error;
    }
 }