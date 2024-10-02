import { Router } from "express";
import { IngresarDatosMedicosController } from "../../Controller/datosMedicos/datosMedicos.controller.js";
import { obtenerDatosMedicosController } from "../../Controller/datosMedicos/GetDatosMedicos.controller.js";


export const datosMedicosRoute = Router();

datosMedicosRoute.post('/ingresarDatosMedicos', IngresarDatosMedicosController);
datosMedicosRoute.get('/obtenerDatosMedicos/:idInfoPersonal', obtenerDatosMedicosController);