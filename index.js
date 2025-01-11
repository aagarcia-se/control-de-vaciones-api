import express from "express";
import cors from "cors"; // Importa cors como una función
import { catalogosRoute } from "./src/CatalogosAPI/routes/catalogos/catalogos.route.js";
import { dpiRoute } from "./src/ApiVacaciones/Routes/DPI/informacionDPI.route.js";
import { infoEmpleRoute } from "./src/ApiVacaciones/Routes/informacionPersonal/infoPersonalEmple.route.js";
import { familiaresRoute } from "./src/ApiVacaciones/Routes/familiares/familiarEmple.route.js";
import { nivelEducativoRoute } from "./src/ApiVacaciones/Routes/nivelEducativo/nivelEducativo.routes.js";
import { pertenenciaSoLiRoute } from "./src/ApiVacaciones/Routes/pertenenciaSociolinguistica/pertenenciaSoli.route.js";
import { datosMedicosRoute } from "./src/ApiVacaciones/Routes/datosMedicos/datosMedicos.route.js";
import { empleadosRoute } from "./src/ApiVacaciones/Routes/empleados/empleados.routes.js";
import { loginRout } from "./src/ApiVacaciones/Routes/login/login.route.js";
import { diasFestivos } from "./src/ApiVacaciones/Routes/DiasFestivos/DiasFestivos.routes.js";
import { VacationAppRoute } from "./src/ApiVacaciones/Routes/VacationApp/VacationApp.routes.js";
import { reportsRoute } from "./src/ApiVacaciones/Routes/Reports/Reports.routes.js";
import { suspensionesRoute } from "./src/ApiVacaciones/Routes/Suspensiones/Suspensiones.routes.js";
import { coordinadoresRoute } from "./src/ApiVacaciones/Routes/Coordinadores/Coordinadores.routes.js";


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
app.use('/api/', VacationAppRoute);
app.use('/api/', loginRout);
app.use('/api/', suspensionesRoute);
app.use('/api/', coordinadoresRoute);


//Reportes
app.use('/api/', reportsRoute);


app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000/api/");
});
