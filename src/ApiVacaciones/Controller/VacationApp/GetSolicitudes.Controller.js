import { getSolicitudesServices } from "../../Services/VacationApp/GetSolicitudes.service.js";

export const getSolicitudesController = async (req, res) => {
    const { unidadSolicitud } = req.query; 
    try {
        const solicitudes = await getSolicitudesServices(unidadSolicitud);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            solicitudes
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}