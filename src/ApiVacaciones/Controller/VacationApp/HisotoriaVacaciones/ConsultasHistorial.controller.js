import { obtenerHistorialPorEmpleadoService } from "../../../Services/VacationApp/HisotrialVacaciones/ConsultasHistorial.service.js";

export const obtenerHistorialPorEmpleadoController = async (req, res) => {
    const { idEmpleado } = req.query; 
    try {
        const historial = await obtenerHistorialPorEmpleadoService(idEmpleado);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            historial
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}