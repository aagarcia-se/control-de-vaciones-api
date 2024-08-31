import { Router } from "express";
import { IngresarEmpleadoController } from "../../Controller/empleados/empleados.controller.js";
import { employeesListController } from "../../Controller/empleados/GetDataEmpleados.controller.js";

export const empleadosRoute = Router();

empleadosRoute.post('/ingresarEmpleado', IngresarEmpleadoController);
empleadosRoute.get('/employeesList', employeesListController);