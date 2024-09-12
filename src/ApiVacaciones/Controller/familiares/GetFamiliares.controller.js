import { obtenerFamiliaresService } from "../../Services/familiares/GetFamiliares.services.js";


export const obtenerFamiliaresController = async (req, res) => {
    const { idEmpleado } = req.params; 
    try {
        const familiares = await obtenerFamiliaresService(idEmpleado);
        const responseData = {
            status: 200,
            message: "Data encontra",
            familiares
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ codRes, responseData });
    }
}