
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getComunidadLinguisticaDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [comunidadesLinguisticas] = await catalogosBD.query("select idComunidadLinguistica, tipoComunidad, estado from comunidadesLinguisticas;");
        return [comunidadesLinguisticas]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
