import { Router } from "express";
import { IngresarNivelEducativoController } from "../../Controller/nivelEducativo/nivelEducativo.controller.js";


export const nivelEducativoRoute = Router();

nivelEducativoRoute.post('/ingresarNivelEducativo', IngresarNivelEducativoController);