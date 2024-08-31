import { IngresarInfoPersonalService } from "../../Services/informacionPersonal/infoPersonalEmple.service.js";

export const IngresarInfoPersonalController = async (req, res) => {
    try{
        const idInfoPersonal = await IngresarInfoPersonalService(req.body);
        const responseData = {
            status: 200,
            message: "Informacion Personal ingresada",
            idInfoPersonal
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