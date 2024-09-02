import { obtenerInfoPersonalServices } from "../../Services/informacionPersonal/GetInforPersonal.services.js";


export const obtenerInfoPersonalController = async (req, res) => {
    const { idEmpleado } = req.params; 
    try {
        const infoPersonal = await obtenerInfoPersonalServices(idEmpleado);
        const responseData = {
            status: 200,
            message: "Data encontra",
            infoPersonal
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}