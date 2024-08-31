import { getUnidadesServices } from "../../services/unidades/unidades.services.js";


export const getUnidadesController = async (req, res) =>{
    try{
        const [departamentos] = await getUnidadesServices();
        res.json({departamentos});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}