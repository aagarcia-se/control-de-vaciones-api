import { Router } from "express";
import { vacaciosReportController } from "../../Controller/Reports/Reporte-Vacaciones.Controller.js";

export const reportsRoute = Router();

reportsRoute.get('/vacacionesReport', vacaciosReportController);