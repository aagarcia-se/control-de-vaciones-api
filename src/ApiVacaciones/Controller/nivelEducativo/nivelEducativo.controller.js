import { IngresarNivelEducativoService } from "../../Services/nivelEducativo/nivelEducativo.service.js";


export const IngresarNivelEducativoController = async (req, res) => {
    try{
        const idNivelEducativo = await IngresarNivelEducativoService(req.body);
        const responseData = {
            status: 200,
            message: "Nivel Educativo ingresado correctamente",
            idNivelEducativo
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