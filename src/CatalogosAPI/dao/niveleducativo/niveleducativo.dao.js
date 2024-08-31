
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getNivelEducativoDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [nivelesEducativo] = await catalogosBD.query("select idNivelEducativo, nivelEducativo, estado from nivelEducativo;");
        return [nivelesEducativo]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
