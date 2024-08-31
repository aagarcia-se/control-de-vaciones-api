import { getRenglonesDao } from "../../dao/renglon/renglonPresupuestario.dao.js";


export const getRenglonesServices = async () =>{
    try{
       const religiones  = await getRenglonesDao();
       return religiones;
    }catch(error){
       return error;
    }
 }