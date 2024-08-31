import { Router } from "express";
import { IngresarFamiliarController } from "../../Controller/familiares/familiaresEmple.controller.js";

export const familiaresRoute = Router();

familiaresRoute.post('/ingresarFamiliar', IngresarFamiliarController);