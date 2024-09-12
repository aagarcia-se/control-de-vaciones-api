import { obtenerFamiliaresDao } from "../../Dao/familiares/GetDatosFamiliares.dao.js";


export const obtenerFamiliaresService = async (idEmpleado) => {
    try{
          const familieares = await obtenerFamiliaresDao(idEmpleado);
          return familieares;
    }catch(error){
       throw error;
 
    }
}