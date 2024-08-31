import { getEstadoCivilServices } from "../../services/estadoCivil/estadoCivil.services.js";


export const getestadoCivilController = async (req, res) =>{
    try{
        const [estadoCivil] = await getEstadoCivilServices();
        res.json({estadoCivil});
    }catch(error){
        return res.status(500).json({
            message: error
        });
    }
}