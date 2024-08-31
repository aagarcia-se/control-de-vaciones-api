import { Router } from "express";
import { IngresarPertenenciaSoLiController } from "../../Controller/pertenenciaSociolinguistica/pertenenciaSoLi.controller.js";


export const pertenenciaSoLiRoute = Router();

pertenenciaSoLiRoute.post('/ingresarPertenenciaSoLi', IngresarPertenenciaSoLiController);