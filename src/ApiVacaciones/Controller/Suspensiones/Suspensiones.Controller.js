import { GetSuspensionesServices, ingresarSuspensionService } from "../../Services/Suspensiones/Suspensiones.service.js";


export const ingresarSuspensionController = async (req, res) => {
    try{
        const idSuspension = await ingresarSuspensionService(req.body);
        const responseData = {
            status: 200,
            message: "Suspension Ingresada correctamente",
            idSuspension
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

export const GetSuspensionesController = async (req, res) => {
    try {
        const suspensionesLaborales = await GetSuspensionesServices();
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            suspensionesLaborales
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}