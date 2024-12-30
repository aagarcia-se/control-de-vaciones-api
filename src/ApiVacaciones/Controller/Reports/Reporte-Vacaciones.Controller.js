import { vacacionesReportService } from "../../Services/Reports/Reporte-Vacaciones.Service.js";


export const vacaciosReportController = async (req, res) => {
    const { unidad } = req.query;
    try {
        const reporteVacaciones = await vacacionesReportService(unidad);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            reporteVacaciones
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}