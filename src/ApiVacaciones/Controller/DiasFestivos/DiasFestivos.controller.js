import { getDiasFestivosServices } from "../../Services/DiasFestivos/DiasFestivos.service.js";


export const getDiasFestivosController = async (req, res) => {
    try {
        const diasFestivos = await getDiasFestivosServices();
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            diasFestivos
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}