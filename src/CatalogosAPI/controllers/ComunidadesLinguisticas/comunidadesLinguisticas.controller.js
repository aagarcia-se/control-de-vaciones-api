import { getComunidadesLinguisticasServices } from "../../services/comunidadesLinguisticas/comunidadesLinguisticas.services.js";

export const getComunidadesLinguisticasController = async (req, res) =>{
    try{
        const [comunidadesLinguisticas] = await getComunidadesLinguisticasServices();
        res.json({comunidadesLinguisticas});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}