import { Router } from "express";
import { IngresarNivelEducativoController } from "../../Controller/nivelEducativo/nivelEducativo.controller.js";
import { obtenerNivelEducativoInfoController } from "../../Controller/nivelEducativo/GetNivelEducativo.controller.js";


export const nivelEducativoRoute = Router();

nivelEducativoRoute.post('/ingresarNivelEducativo', IngresarNivelEducativoController);
nivelEducativoRoute.get('/getNivelEducativo/:idInfoPersonal', obtenerNivelEducativoInfoController);