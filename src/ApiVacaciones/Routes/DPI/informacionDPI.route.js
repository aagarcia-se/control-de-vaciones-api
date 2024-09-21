import { Router } from "express";
import { IngresarInfoDpiController } from "../../Controller/DPI/informacionDPI.controller.js";
import { obtenerInfoDPIController } from "../../Controller/DPI/GetDatosCui.controller.js";

export const dpiRoute = Router();

dpiRoute.post('/ingresarInfDpi', IngresarInfoDpiController);
dpiRoute.get('/infoDpi/:idDpi', obtenerInfoDPIController);