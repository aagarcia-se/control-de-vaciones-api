import { Router } from "express";
import { IngresarEmpleadoController } from "../../Controller/empleados/empleados.controller.js";
import { employeesListController, obtenerDatosLaboralesController } from "../../Controller/empleados/GetDataEmpleados.controller.js";

export const empleadosRoute = Router();

empleadosRoute.post('/ingresarEmpleado', IngresarEmpleadoController);
empleadosRoute.get('/employeesList', employeesListController);
empleadosRoute.get('/ObtenerdatosLaborales/:idInfoPersonal', obtenerDatosLaboralesController);