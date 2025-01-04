import { handleServiceError } from "../../../MiddleWares/handleServiceError.js";
import { IngresarEmpleadoDao } from "../../Dao/empleados/empleados.dao.js";
import { registrarCoordinadorServices } from "../Coordinadores/Coordinadores.Service.js";
import { obtenerInfoPersonalServices } from "../informacionPersonal/GetInforPersonal.services.js";
import { CrearUsuarioService } from "../usuarios/usuarios.service.js";


// Función auxiliar para manejar la lógica de coordinadores
const manejarCoordinador = handleServiceError( async (data) => {
  const { primerNombre, segundoNombre, primerApellido, segundoApellido } = await obtenerInfoPersonalServices(data.idInfoPersonal);

  const nombreCoordinador = `${primerNombre} ${segundoNombre || ""} ${primerApellido} ${segundoApellido || ""}`.trim();
  
    // Validaciones iniciales
    if (!data.idInfoPersonal || !data.unidad || !data.correoInstitucional || !nombreCoordinador) {
      throw new Error("Datos insuficientes para registrar al empleado.");
    }

  const datosCoordinador = {
    idEmpleado: data.idEmpleado,
    nombreCoordinador,
    coordinadorUnidad: data.unidad,
    correoCoordinador: data.correoInstitucional,
  };

  return registrarCoordinadorServices(datosCoordinador);
});


// Función principal con el middleware aplicado
export const IngresarEmpleadosService = handleServiceError(async (data) => {

  // Registro del empleado
  const idEmpleado = await IngresarEmpleadoDao(data);
  data.idEmpleado = idEmpleado;

  // Lógica para coordinadores
  if (data.isCoordinador == 1) {
    await manejarCoordinador(data);
  }

  // Creación de usuario asociado al empleado
  await CrearUsuarioService(data);

  return idEmpleado; // Retorna el ID del empleado creado
});
