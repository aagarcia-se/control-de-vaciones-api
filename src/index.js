import express from "express";
import cors from "cors"; // Importa cors como una función
import { catalogosRoute } from "./CatalogosAPI/routes/catalogos/catalogos.route.js";
import { dpiRoute } from "./ApiVacaciones/Routes/DPI/informacionDPI.route.js";
import { infoEmpleRoute } from "./ApiVacaciones/Routes/informacionPersonal/infoPersonalEmple.route.js";
import { familiaresRoute } from "./ApiVacaciones/Routes/familiares/familiarEmple.route.js";
import { nivelEducativoRoute } from "./ApiVacaciones/Routes/nivelEducativo/nivelEducativo.routes.js";
import { pertenenciaSoLiRoute } from "./ApiVacaciones/Routes/pertenenciaSociolinguistica/pertenenciaSoli.route.js";
import { datosMedicosRoute } from "./ApiVacaciones/Routes/datosMedicos/datosMedicos.route.js";
import { empleadosRoute } from "./ApiVacaciones/Routes/empleados/empleados.routes.js";
import { loginRout } from "./ApiVacaciones/Routes/login/login.route.js";
import { diasFestivos } from "./ApiVacaciones/Routes/DiasFestivos/DiasFestivos.routes.js";


const app = express();
app.use(express.json());
app.use(cors());

//catalogos.
app.use('/api/', catalogosRoute);
app.use('/api/', diasFestivos);

//acciones
app.use('/api/', dpiRoute);
app.use('/api/', infoEmpleRoute);
app.use('/api/', familiaresRoute);
app.use('/api/', nivelEducativoRoute);
app.use('/api/', pertenenciaSoLiRoute);
app.use('/api/', datosMedicosRoute);
app.use('/api/', empleadosRoute);
app.use('/api/', loginRout);



app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/api/");
});
