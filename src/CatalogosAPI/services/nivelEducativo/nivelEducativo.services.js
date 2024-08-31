import { getNivelEducativoDao } from "../../dao/niveleducativo/niveleducativo.dao.js";

export const getNivelEducativoServices = async () =>{
    try{
       const nivelEducativo  = await getNivelEducativoDao();
       return nivelEducativo;
    }catch(error){
       return error;
    }
 }