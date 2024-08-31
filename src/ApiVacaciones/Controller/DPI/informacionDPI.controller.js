import { IngresarInfoDpiServices } from "../../Services/DPI/informacionDPI.service.js";


export const IngresarInfoDpiController = async (req, res) => {
    try {
        const idDpi = await IngresarInfoDpiServices(req.body);
        const responseData = {
            status: 200,
            message: "Datos ingresados correctamente",
            idDpi
        };
        res.status(200).json(responseData);
        
    } catch (error) {
        const status = error?.codRes || 500;
        const responseData = error?.message || error;
        res.status(status).json({ responseData });
    }
}
