import { transporter } from "./Transporter.js";

export const EnviarMailAutorizacionDeVacaciones = async (data, plantiila, bufferPDF) => {
  const estadoTexto = data.estadoSolicitud?.toLowerCase() === "autorizadas" ? "Autorizadas" : "Rechazadas"
  // Detalles del correo electrónico
  const mailOptions = {
    from: "gestionesrrhhiga@gmail.com",
    to: data.correoPersonal,
    subject: `Vacaciones ${estadoTexto}  no-replay`,
    html: plantiila,
    // Incluir adjunto solo si bufferPDF no es null
    attachments: bufferPDF
      ? [
          {
            filename: `slvc_${data.idSolicitud}_solicitud_vacaciones.pdf`,
            content: bufferPDF,
            contentType: "application/pdf",
          },
        ]
      : [],
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Correo electrónico enviado: " + info.response);
    }
  });
};

export const EnviarMailSolicitudDeVacaciones = async (
  data,
  plantiila,
  bufferPDF
) => {
  // Detalles del correo electrónico
  const mailOptions = {
    from: "gestionesrrhhiga@gmail.com",
    to: data.correoCoordinador,
    subject: "Solicitud de vacaciones no-replay",
    html: plantiila,
    attachments: [
      {
        filename: `slvc_${data.idSolicitud}_solicitud_vacaciones.pdf`,
        content: bufferPDF,
        contentType: "application/pdf",
      },
    ],
  };

  // Enviar el correo electrónico
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Correo electrónico enviado: " + info.response);
    }
  });
};
