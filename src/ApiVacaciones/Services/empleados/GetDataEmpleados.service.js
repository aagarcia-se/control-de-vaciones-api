import { employeesListDao, obtenerDatosLaboralesDao } from "../../Dao/empleados/GetDataEmpleados.dao.js";

export const employeesListServices = async () => {
    try{
          const emplloyeesList = await employeesListDao();
          return emplloyeesList;
    }catch(error){
       throw error;
 
    }
  }


  export const obtenerDatosLaboralesServices = async (idInfoPersonal) => {
      try{
            const datosLaborales = await obtenerDatosLaboralesDao(idInfoPersonal);
            return datosLaborales;
      }catch(error){
         throw error;
   
      }
    }