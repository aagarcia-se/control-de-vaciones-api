import { employeesListServices, obtenerDatosLaboralesServices } from "../../Services/empleados/GetDataEmpleados.service.js";


export const employeesListController = async (req, res) => {
    try{
        const emplloyeesList = await employeesListServices();
        const responseData = {
            codRes: 200,
            message: "Lista de empleados encontrada",
            emplloyeesList
        }
        res
        .status(200)
        .json({responseData});

    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }

}


export const obtenerDatosLaboralesController = async (req, res) => {
    const { idInfoPersonal } = req.params; 
    try {
        const datosLaborales = await obtenerDatosLaboralesServices(idInfoPersonal);
        const responseData = {
            status: 200,
            message: "Data encontra correctamente",
            datosLaborales
        };
        res.status(200).json(responseData);
        
    }catch(error){
        const codRes = error?.codRes || 500;
        const responseData = error?.message || error;
        responseData.status;
        res.status(codRes).json({ responseData });
    }
}