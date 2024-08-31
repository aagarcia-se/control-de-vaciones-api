import { getPuestosDao } from "../../dao/puestos/puestos.dao.js";


export const getPuestosServices = async () =>{
    try{
       const puestos  = await getPuestosDao();
       return puestos;
    }catch(error){
       return error;
    }
 }