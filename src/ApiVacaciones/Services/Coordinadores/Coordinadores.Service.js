import { consultarCoordinadorDao, registrarCoordinadorDao } from "../../Dao/Coordinadores/Coordinadores.Dao.js";



export const registrarCoordinadorServices = async (data) => {
    try{
          const coordinadorId = await registrarCoordinadorDao(data);
          return coordinadorId;
    }catch(error){
       throw error;
 
    }
  }

export const consultarCoordinadorService = async (coordinadorUnidad) => {
    try{
          const coordinador = await consultarCoordinadorDao(coordinadorUnidad);
          return coordinador;
    }catch(error){
       throw error;
 
    }
  }


