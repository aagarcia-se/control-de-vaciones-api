import { getDepartamentosServices } from "../../services/departamentos/departamentos.services.js";


export const getDepartamentosController = async (req, res) =>{
    try{
        const [departamentos] = await getDepartamentosServices();
        res.json({departamentos});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}