
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getDiscapacidadesDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [discapacidades] = await catalogosBD.query("select idDiscapacidad, tipoDiscapacidad, estado from discapacidades;");
        return [discapacidades]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
