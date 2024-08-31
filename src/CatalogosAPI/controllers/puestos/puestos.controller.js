import { getPuestosServices } from "../../services/puestos/puestos.services.js";


export const getPuestosController = async (req, res) =>{
    try{
        const [departamentos] = await getPuestosServices();
        res.json({departamentos});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}