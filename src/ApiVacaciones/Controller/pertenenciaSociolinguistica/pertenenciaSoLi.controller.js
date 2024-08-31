import { IngresarPertenenciaSoLiServices } from "../../Services/pertenenciaSociolinguistica/pertenciaSoLi.service.js";


export const IngresarPertenenciaSoLiController = async (req, res) => {
    try{
        const idPertenenciaSoLi = await IngresarPertenenciaSoLiServices(req.body);
        const responseData = {
            status: 200,
            message: "Pertenencia Sociolinguistica ingresado correctamente",
            idPertenenciaSoLi
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