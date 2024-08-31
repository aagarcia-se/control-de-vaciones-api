import { getEstadoCivilDao } from "../../dao/estadosCivil/estadosCivil.dao.js";



export const getEstadoCivilServices = async () =>{
    try{
       const estadoCivil  = await getEstadoCivilDao();
       return estadoCivil;
    }catch(error){
       return error;
    }
 }