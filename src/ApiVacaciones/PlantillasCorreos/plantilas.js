import { formatDateToDisplay } from "../Services/Utils/DateUtils.js";

const plantillaAutorizacionDeVacaciones = (data) => {
    const estado = data?.estadoSolicitud?.toLowerCase() || "no especificado";
    const claseEstado =  estado === "autorizadas" ? "estado-autorizada" : "estado-rechazada";
    const estadoTexto = estado === "autorizadas" ? "AUTORIZADA" : "RECHAZADA"

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
                        .estado-autorizada {
                        color: green;
                        font-weight: bold;
                        }
                        .estado-rechazada {
                        color: red;
                        font-weight: bold;
                        }
                      </style>
                      </head>
                      <body>
                      <div class="container">
                          <div class="header">
                          Notificación de solicitud de vacaciones
                          </div>
                          <div class="content">
                          <p>Estimado(a) <strong> ${data.nombreCompleto} </strong>,</p>
                          <p>Le informamos que su solicitud de vacaciones ha sido 
                          <strong class="${claseEstado}">${estadoTexto}</strong>.
                          A continuación se detallan los datos correspondientes:</p>
                          <div class="info"><strong>Fecha de Inicio:</strong> 
                          ${formatDateToDisplay(data.fechaInicioVacaciones)} </div>
                          <div class="info"><strong>Fecha Fin:</strong>
                           ${formatDateToDisplay(data.fechaFinVacaciones)}</div>
                          <div class="info"><strong>Día de Reintegro:</strong>
                           ${formatDateToDisplay(data.fechaRetornoLabores)}</div>
                          <div class="info"><strong>Días a Tomar:</strong> 
                          ${data.cantidadDiasSolicitados}</div>
                          <p>Si tiene alguna duda o necesita asistencia adicional, no dude en catactarse con su coordinador.</p>
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

const PlantillaNotificacionSolicitudACoordinador = (data) => {
  const html = `
                <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Notificación de Solicitud de Vacaciones</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        line-height: 1.6;
                        color: #333;
                        background-color: #f9f9f9;
                        margin: 0;
                        padding: 20px;
                    }
                    .container {
                        max-width: 600px;
                        margin: 0 auto;
                        background: #fff;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                        padding: 20px;
                        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    }
                    h1 {
                        font-size: 18px;
                        color: #0056b3;
                    }
                    p {
                        margin: 10px 0;
                    }
                    table {
                        width: 100%;
                        border-collapse: collapse;
                        margin: 20px 0;
                    }
                    table th, table td {
                        border: 1px solid #ddd;
                        padding: 8px;
                        text-align: left;
                    }
                    table th {
                        background-color: #f4f4f4;
                    }
                    .footer {
                        margin-top: 20px;
                        font-size: 12px;
                        color: #666;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Notificación de Solicitud de Vacaciones</h1>
                    <p>Estimado/a <strong>${data.nombreCoordinador}</strong>,</p>
                    <p>Se le informa que se ha ingresado una solicitud de vacaciones pertenecinetes a <strong>${data.nombreCompleto} </strong>, quien pertenece a la unidad <strong>${data.unidadSolicitud}</strong>. 
                    A continuación, se muestra el detalle de la solicitud:</p>

                    <table>
                        <tr>
                            <th>Detalle</th>
                            <th>Información</th>
                        </tr>
                        <tr>
                            <td>Cantidad de días solicitados</td>
                            <td>${data.cantidadDiasSolicitados}</td>
                        </tr>
                        <tr>
                            <td>Fecha de inicio de vacaciones</td>
                            <td>${formatDateToDisplay( data.fechaInicioVacaciones )}</td>
                        </tr>
                        <tr>
                            <td>Fecha de finalización de vacaciones</td>
                            <td>${formatDateToDisplay( data.fechaFinVacaciones )}</td>
                        </tr>
                        <tr>
                            <td>Fecha de retorno a labores</td>
                            <td>${formatDateToDisplay( data.fechaRetornoLabores )}</td>
                        </tr>
                    </table>

                    <p>Para la gestión de la solicitud por favor ingresar a.</p>
                    <span>https://administracioncna.vercel.app/</span>

                    <div class="footer">
                        <p>Este es un mensaje generado automáticamente, por favor no responda a este correo.</p>
                    </div>
                </div>
            </body>
            </html>
      `;

  return html;
};

export const GenerarPlantillasCorreos = (plantilla, data) => {
  switch (plantilla) {
    case "autorizacion-vacaciones":
      return plantillaAutorizacionDeVacaciones(data);
    break;
    case "solicitud-vacaciones":
        return PlantillaNotificacionSolicitudACoordinador(data);
    break;
    default:
      return "Opcion invalida";
      break;
  }
};
