import { acreditarDiasPorPeriodoService } from "../../../Services/VacationApp/HisotrialVacaciones/ControlDeDias.service.js";


export const acreditarDiasPorPeriodoController = async (req, res) => {
    try{
        const hitorialIngresados = await acreditarDiasPorPeriodoService(req.body);
        const responseData = {
            status: 200,
            message: "Historial ingresado correctamente",
            hitorialIngresados
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