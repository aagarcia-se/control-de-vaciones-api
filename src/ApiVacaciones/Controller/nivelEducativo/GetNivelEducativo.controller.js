import { obtenerNivelEducativoInfoSerices } from "../../Services/nivelEducativo/GetNivelEducativo.service.js";


export const obtenerNivelEducativoInfoController = async (req, res) => {
    const { idInfoPersonal } = req.params; 
    try {
        const nivelEducativoInf = await obtenerNivelEducativoInfoSerices(idInfoPersonal);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            nivelEducativoInf
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}