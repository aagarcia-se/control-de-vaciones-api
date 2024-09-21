import { obtenerNivelEducativoInfoDao } from "../../Dao/nivelEducativo/GetNivelEducativo.dao.js";


export const obtenerNivelEducativoInfoSerices = async (idInfoPersonal) => {
    try{
          const nivelEducativoInf = await obtenerNivelEducativoInfoDao(idInfoPersonal);
          return nivelEducativoInf;
    }catch(error){
       throw error;
 
    }
  }