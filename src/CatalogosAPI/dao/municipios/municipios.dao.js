
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getMunicipiosDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [municipios] = await catalogosBD.query("select idMunicipio, municipio, estado from municipios;");
        return [municipios]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
