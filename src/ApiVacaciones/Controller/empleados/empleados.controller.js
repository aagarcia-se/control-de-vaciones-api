import { IngresarEmpleadosService } from "../../Services/empleados/empleados.service.js";


export const IngresarEmpleadoController = async (req, res) => {
    try{
        const idEmpleado = await IngresarEmpleadosService(req.body);
        const responseData = {
            status: 200,
            message: "Empleado ingresado correctamente",
            idEmpleado
        }
        res
        .status(200)
        .json({responseData});

    }catch(error){
        const status = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(status).json({ responseData });
    }

}