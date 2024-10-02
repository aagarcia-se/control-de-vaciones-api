import { obtenerDatosMedicosServices } from "../../Services/datosMedicos/GetDatosMedos.service.js";


export const obtenerDatosMedicosController = async (req, res) => {
    const { idInfoPersonal } = req.params; 
    try {
        const datosMedicos = await obtenerDatosMedicosServices(idInfoPersonal);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            datosMedicos
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}