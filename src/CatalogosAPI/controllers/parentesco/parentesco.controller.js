import { getparentescoServices } from "../../services/parentesco/parentesco.services.js";

export const getParentescoController = async (req, res) =>{
    try{
        const [departamentos] = await getparentescoServices();
        res.json({departamentos});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}