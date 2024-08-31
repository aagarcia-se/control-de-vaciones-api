
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getGeneroDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [genero] = await catalogosBD.query("select idGenero, genero, estado from genero;");
        return [genero]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
