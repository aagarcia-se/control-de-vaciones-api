import { IngresarEmpleadoDao } from "../../Dao/empleados/empleados.dao.js";
import { CrearUsuarioService } from "../usuarios/usuarios.service.js";

export const IngresarEmpleadosService = async (data) => {
  try {
    const idEmpleado = await IngresarEmpleadoDao(data);
    data.idEmpleado = idEmpleado;

    const usuario = await CrearUsuarioService(data);
    return idEmpleado;
  } catch (error) {
    throw error;
  }
};
