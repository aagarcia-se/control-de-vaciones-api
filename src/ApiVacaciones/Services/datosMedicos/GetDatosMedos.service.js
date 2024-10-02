import { obtenerDatosMedicoDao } from "../../Dao/datosMedicos/GetDatosMedicos.Dao.js";

export const obtenerDatosMedicosServices = async (idInfoPersonal) => {
    try{
          const datosMedicos = await obtenerDatosMedicoDao(idInfoPersonal);
          return datosMedicos;
    }catch(error){
       throw error;
 
    }
  }