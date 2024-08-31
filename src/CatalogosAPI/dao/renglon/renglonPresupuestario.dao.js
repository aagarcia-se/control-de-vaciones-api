
import { CerraBDCatalogos, ConectarBDCatalogos } from "../ConexionB/ConexionBDC.dao.js";


export const getRenglonesDao = async () => {
    let catalogosBD;
    
    try{
        catalogosBD = await ConectarBDCatalogos();
        const [renglones] = await catalogosBD.query("select idRenglonPresupuestario, renglon, descripcion, estado from renglonesPresupuestarios;");
        return [renglones]; 
    }catch(error){
        return error;
    }finally{
        CerraBDCatalogos(catalogosBD);
    }
}
