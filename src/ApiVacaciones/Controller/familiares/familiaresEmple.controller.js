import { IngresarFamiliarService } from "../../Services/familiares/familiaresEmple.service.js";


export const IngresarFamiliarController = async (req, res) => {
    try{
        const idFamiliar = await IngresarFamiliarService(req.body);
        const responseData = {
            status: 200,
            message: "Familiar ingresado correctamente",
            idFamiliar
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