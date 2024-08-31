import { getGeneroDao } from "../../dao/genero/genero.dao.js";


export const getGeneroServices = async () =>{
    try{
       const genero  = await getGeneroDao();
       return genero;
    }catch(error){
       return error;
    }
 }