import { getDepartamentosDao } from "../../dao/departamentos/departamentos.dao.js";


export const getDepartamentosServices = async () =>{
    try{
       const departamentosList  = await getDepartamentosDao();
       return departamentosList;
    }catch(error){
       return error;
    }
 }