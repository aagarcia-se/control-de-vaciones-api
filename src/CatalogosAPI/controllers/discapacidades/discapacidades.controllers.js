import { getDiscapacidadesServices } from "../../services/discapacidades/discapacidades.services.js";

export const getDiscapacidadesController = async (req, res) =>{
    try{
        const [discapacidades] = await getDiscapacidadesServices();
        res.json({discapacidades});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}