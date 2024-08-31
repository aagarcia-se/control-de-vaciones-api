import { getComunidadLinguisticaDao } from "../../dao/comunidadLinguistica/comunidadlinguistica.dao.js";


export const getComunidadesLinguisticasServices = async () =>{
    try{
       const comunidadesLinguisticas  = await getComunidadLinguisticaDao();
       return comunidadesLinguisticas;
    }catch(error){
       return error;
    }
 }