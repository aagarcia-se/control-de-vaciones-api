import { formatDateToDisplay } from "../Services/Utils/DateUtils.js";

const plantillaAutorizacionDeVacaciones = (data) => {
  const html = `
                    <!DOCTYPE html>
                    <html lang="es">
                    <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                        body {
                        font-family: Arial, sans-serif;
                        background-color: #f9f9f9;
                        color: #333;
                        line-height: 1.6;
                        margin: 0;
                        padding: 0;
                        }
                        .container {
                        max-width: 600px;
                        margin: 20px auto;
                        background-color: #ffffff;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        overflow: hidden;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                        background-color: #007bff;
                        color: #ffffff;
                        padding: 20px;
                        text-align: center;
                        font-size: 1.5em;
                        }
                        .content {
                        padding: 20px;
                        }
                        .info {
                        margin-bottom: 10px;
                        }
                        .info strong {
                        display: inline-block;
                        width: 150px;
                        font-weight: bold;
                        }
                        .footer {
                        background-color: #f1f1f1;
                        padding: 10px;
                        text-align: center;
                        font-size: 0.9em;
                        color: #777;
                        }
                    </style>
                    </head>
                    <body>
                    <div class="container">
                        <div class="header">
                        Notificación de Vacaciones Autorizadas
                        </div>
                        <div class="content">
                        <p>Estimado(a) ${data.nombreCompleto},</p>
                        <p>Nos complace informarle que su solicitud de vacaciones ha sido autorizada. A continuación se detallan los datos correspondientes:</p>
                        <div class="info"><strong>Fecha de Inicio:</strong> ${formatDateToDisplay(data.fechaInicioVacaciones)} </div>
                        <div class="info"><strong>Fecha Fin:</strong> ${formatDateToDisplay(data.fechaFinVacaciones)}</div>
                        <div class="info"><strong>Día de Reintegro:</strong> ${formatDateToDisplay(data.fechaRetornoLaboral)}</div>
                        <div class="info"><strong>Días a Tomar:</strong> ${data.cantidadDiasSolicitados}</div>
                        <p>Si tiene alguna duda o necesita asistencia adicional, no dude en contactarnos.</p>
                        </div>
                        <div class="footer">
                        Este es un mensaje automático, por favor no responda a este correo.
                        </div>
                    </div>
                    </body>
                    </html>
    `;

    return html;
};

export const GenerarPlantillasCorreos = (plantilla, data) => {

    switch(plantilla){
        case "autorizacion-vacaciones":
            return plantillaAutorizacionDeVacaciones(data);
        break;
        default:
            return "Opcion invalida"
        break;
    }


};


