
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getPuebloPertenecienteDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [pueblosPerteneciente] = await catalogosBD.query("select idPuebloPerteneciente, pueblo, estado from puebloPerteneciente;");
        return [pueblosPerteneciente]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
