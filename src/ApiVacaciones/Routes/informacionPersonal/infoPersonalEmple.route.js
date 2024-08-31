import { Router } from "express";
import { IngresarInfoPersonalController } from "../../Controller/informacionPersonal/infoPersonalEmple.controller.js";

export const infoEmpleRoute = Router();

infoEmpleRoute.post('/infoPersonalEmpleado', IngresarInfoPersonalController);