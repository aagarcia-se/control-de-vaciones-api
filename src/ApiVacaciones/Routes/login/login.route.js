import { Router } from "express";
import { loginController } from "../../Controller/login/login.controller.js";

export const loginRout = Router();

loginRout.post('/login', loginController);