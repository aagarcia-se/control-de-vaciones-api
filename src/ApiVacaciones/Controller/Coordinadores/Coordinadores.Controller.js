import { consultarCoordinadorService, registrarCoordinadorServices } from "../../Services/Coordinadores/Coordinadores.Service.js";



export const registrarCoordinadorController = async (req, res) => {
    try{
        const idCoordinador = await registrarCoordinadorServices(req.body);
        const responseData = {
            status: 200,
            message: "Coordinador Ingresada correctamente",
            idCoordinador
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

export const consultarCoordinadorController = async (req, res) => {
    const { unidad } = req.query;
    try {
        const coordinador = await consultarCoordinadorService(unidad);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            coordinador
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}