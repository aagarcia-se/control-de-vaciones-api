import { Router } from "express";
import { IngresarDatosMedicosController } from "../../Controller/datosMedicos/datosMedicos.controller.js";


export const datosMedicosRoute = Router();

datosMedicosRoute.post('/ingresarDatosMedicos', IngresarDatosMedicosController);