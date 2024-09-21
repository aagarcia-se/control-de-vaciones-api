import { obtenerInfoDPIDao } from "../../Dao/DPI/GetDatosCui.dao.js";


export const obtenerInfoDPIServices = async (idDpi) => {
    try{
          const dpiData = await obtenerInfoDPIDao(idDpi);
          return dpiData;
    }catch(error){
       throw error;
 
    }
  }