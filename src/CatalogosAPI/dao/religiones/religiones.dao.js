
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getReligionesDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [religiones] = await catalogosBD.query("select idReligion, religion, estado from religiones;");
        return [religiones]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
