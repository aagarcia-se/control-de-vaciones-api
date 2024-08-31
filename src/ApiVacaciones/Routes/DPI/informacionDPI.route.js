import { Router } from "express";
import { IngresarInfoDpiController } from "../../Controller/DPI/informacionDPI.controller.js";

export const dpiRoute = Router();

dpiRoute.post('/ingresarInfDpi', IngresarInfoDpiController);