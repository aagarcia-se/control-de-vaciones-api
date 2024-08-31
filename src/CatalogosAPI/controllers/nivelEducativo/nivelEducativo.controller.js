import { getNivelEducativoServices } from "../../services/nivelEducativo/nivelEducativo.services.js";

export const getNivelEducativoController = async (req, res) =>{
    try{
        const [nivelEducativo] = await getNivelEducativoServices();
        res.json({nivelEducativo});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}