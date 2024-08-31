import { getMunicipiosServices } from "../../services/municipios/municipios.services.js";


export const getMunicipiosController = async (req, res) =>{
    try{
        const [municipios] = await getMunicipiosServices();
        res.json({municipios});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}