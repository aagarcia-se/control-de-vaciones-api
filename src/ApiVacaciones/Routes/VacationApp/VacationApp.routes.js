import { Router } from "express";
import { getSolicitudesByIdController } from "../../Controller/VacationApp/GetSolicitudesById.controller.js";
import { IngresarSolicitudController } from "../../Controller/VacationApp/ModificarSolicitud.controller.js";

export const VacationAppRoute = Router();


VacationAppRoute.get('/solicitudesById', getSolicitudesByIdController);
VacationAppRoute.post('/ingresarSolicitudVacaciones', IngresarSolicitudController);