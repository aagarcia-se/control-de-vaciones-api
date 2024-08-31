import { getPuebloPertenecienteDao } from "../../dao/puebloPerteneciente/PueblosPerteneciente.js";

export const getPuebloPertenecienteServices = async () =>{
    try{
       const puebloPerteneciente  = await getPuebloPertenecienteDao();
       return puebloPerteneciente;
    }catch(error){
       return error;
    }
 }