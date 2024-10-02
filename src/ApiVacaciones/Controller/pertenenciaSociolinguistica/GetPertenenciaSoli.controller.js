import { obtenerPertenenciaSoliServices } from "../../Services/pertenenciaSociolinguistica/GetPertenenciaSoLi.service.js";



export const obtenerPertenenciaSoliController = async (req, res) => {
    const { idInfoPersonal } = req.params; 
    try {
        const infoSoli = await obtenerPertenenciaSoliServices(idInfoPersonal);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            infoSoli
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}