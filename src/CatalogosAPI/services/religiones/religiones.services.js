import { getReligionesDao } from "../../dao/religiones/religiones.dao.js";

export const getReligionesServices = async () =>{
    try{
       const religiones  = await getReligionesDao();
       return religiones;
    }catch(error){
       return error;
    }
 }