import { Router } from "express";
import { getDiasFestivosController } from "../../Controller/DiasFestivos/DiasFestivos.controller.js";

export const diasFestivos = Router();

diasFestivos.get('/getDiasFestivos', getDiasFestivosController);