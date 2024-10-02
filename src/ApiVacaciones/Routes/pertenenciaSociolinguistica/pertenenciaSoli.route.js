import { Router } from "express";
import { IngresarPertenenciaSoLiController } from "../../Controller/pertenenciaSociolinguistica/pertenenciaSoLi.controller.js";
import { obtenerPertenenciaSoliController } from "../../Controller/pertenenciaSociolinguistica/GetPertenenciaSoli.controller.js";


export const pertenenciaSoLiRoute = Router();

pertenenciaSoLiRoute.post('/ingresarPertenenciaSoLi', IngresarPertenenciaSoLiController);
pertenenciaSoLiRoute.get('/obtenerInfoSoli/:idInfoPersonal', obtenerPertenenciaSoliController);