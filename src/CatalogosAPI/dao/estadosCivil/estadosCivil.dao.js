
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getEstadoCivilDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [estadosCivil] = await catalogosBD.query("select idEstadoCivil, estadoCivil, estado from estadosCivil;");
        return [estadosCivil]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
