import { IngresarSolicitudService } from "../../Services/VacationApp/ModificarSolicitud.service.js";


export const IngresarSolicitudController = async (req, res) => {
    try{
        const idSolicitud = await IngresarSolicitudService(req.body);
        const responseData = {
            status: 200,
            message: "Solicitud ingresados correctamente",
            idSolicitud
        }
        res
        .status(200)
        .json({responseData});

    }catch(error){
        const status = error?.codRes || 500;
        const responseData = error?.message || error;
        res.status(status).json({ responseData });
    }

}