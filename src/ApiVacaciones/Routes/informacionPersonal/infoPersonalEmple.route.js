import { Router } from "express";
import { IngresarInfoPersonalController } from "../../Controller/informacionPersonal/infoPersonalEmple.controller.js";
import { obtenerInfoPersonalController } from "../../Controller/informacionPersonal/GetInfoPersonal.controller.js";

export const infoEmpleRoute = Router();

infoEmpleRoute.post('/infoPersonalEmpleado', IngresarInfoPersonalController);
infoEmpleRoute.get('/obtenerInfoPersonal/:idInfoPersonal', obtenerInfoPersonalController);