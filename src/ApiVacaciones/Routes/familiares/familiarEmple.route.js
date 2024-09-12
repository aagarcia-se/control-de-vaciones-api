import { Router } from "express";
import { IngresarFamiliarController } from "../../Controller/familiares/familiaresEmple.controller.js";
import { obtenerFamiliaresController } from "../../Controller/familiares/GetFamiliares.controller.js";

export const familiaresRoute = Router();

familiaresRoute.post('/ingresarFamiliar', IngresarFamiliarController);
familiaresRoute.get('/obtenerFamiliares/:idEmpleado', obtenerFamiliaresController);