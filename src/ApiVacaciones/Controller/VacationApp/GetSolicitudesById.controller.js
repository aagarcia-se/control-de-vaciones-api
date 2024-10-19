import { getSolicitudesByIdServices } from "../../Services/VacationApp/GetSolicitudesById.service.js";


export const getSolicitudesByIdController = async (req, res) => {
    const { idEmpleado, idInfoPersonal } = req.query; 
    try {
        const solicitud = await getSolicitudesByIdServices(idEmpleado, idInfoPersonal);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            solicitud
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}