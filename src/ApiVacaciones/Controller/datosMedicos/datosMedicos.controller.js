import { IngresarDatosMedicosServices } from "../../Services/datosMedicos/datosMedicos.service.js";


export const IngresarDatosMedicosController = async (req, res) => {
    try{
        const idDatoMedico = await IngresarDatosMedicosServices(req.body);
        const responseData = {
            status: 200,
            message: "Datos Medicos ingresados correctamente",
            idDatoMedico
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