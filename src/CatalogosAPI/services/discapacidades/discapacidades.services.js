import { getDiscapacidadesDao } from "../../dao/discapacidades/discapacidades.dao.js";

export const getDiscapacidadesServices = async () =>{
    try{
       const discapacidades  = await getDiscapacidadesDao();
       return discapacidades;
    }catch(error){
       return error;
    }
 }