import { obtenerInfoDPIDao } from "../../Dao/DPI/GetDatosCui.dao.js";


export const obtenerInfoDPIServices = async (idEmpleado) => {
    try{
          const dpiData = await obtenerInfoDPIDao(idEmpleado);
          return dpiData;
    }catch(error){
       throw error;
 
    }
  }