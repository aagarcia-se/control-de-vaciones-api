import { employeesListDao } from "../../Dao/empleados/GetDataEmpleados.dao.js";

export const employeesListServices = async () => {
    try{
          const emplloyeesList = await employeesListDao();
          return emplloyeesList;
    }catch(error){
       throw error;
 
    }
  }