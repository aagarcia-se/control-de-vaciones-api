import { getParentescoDao } from "../../dao/parentesco/parentesco.dao.js";


export const getparentescoServices = async () =>{
    try{
       const parentesco  = await getParentescoDao();
       return parentesco;
    }catch(error){
       return error;
    }
 }