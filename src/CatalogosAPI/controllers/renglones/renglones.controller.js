import { getRenglonesServices } from "../../services/renglones/renglones.services.js";

export const getRenglonesController = async (req, res) =>{
    try{
        const [departamentos] = await getRenglonesServices();
        res.json({departamentos});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}