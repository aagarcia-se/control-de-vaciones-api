import { obtenerInfoDPIServices } from "../../Services/DPI/GetDatosCUi.services.js";


export const obtenerInfoDPIController = async (req, res) => {
    const { idEmpleado } = req.params; 
    try {
        const dpiData = await obtenerInfoDPIServices(idEmpleado);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            dpiData
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}