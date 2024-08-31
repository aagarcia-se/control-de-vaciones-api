import { getGeneroServices } from "../../services/genero/genero.services.js";


export const getGeneroController = async (req, res) =>{
    try{
        const [genero] = await getGeneroServices();
        res.json({genero});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}