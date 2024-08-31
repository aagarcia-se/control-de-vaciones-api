import { getReligionesServices } from "../../services/religiones/religiones.services.js";


export const getReligionesController = async (req, res) =>{
    try{
        const [religiones] = await getReligionesServices();
        res.json({religiones});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}