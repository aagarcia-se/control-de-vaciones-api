import { Router } from "express";
import { GetSuspensionesController, ingresarSuspensionController } from "../../Controller/Suspensiones/Suspensiones.Controller.js";


export const suspensionesRoute = Router();

suspensionesRoute.get('/getSuspensiones', GetSuspensionesController);
suspensionesRoute.post('/ingresarSuspension', ingresarSuspensionController);