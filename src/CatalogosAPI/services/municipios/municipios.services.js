import { getMunicipiosDao } from "../../dao/municipios/municipios.dao.js";


export const getMunicipiosServices = async () =>{
    try{
       const municipios  = await getMunicipiosDao();
       return municipios;
    }catch(error){
       return error;
    }
 }