import { transporter } from "./Transporter.js";


export const EnviarMailAutorizacionDeVacaciones = async (data, plantiila, bufferPDF)=> {
    // Detalles del correo electrónico
    const mailOptions = {
      from: "gestionesrrhhiga@gmail.com",
      to: data.correoPersonal,
      subject: "Vacaciones autorizadas no-replay",
      html: plantiila,
      attachments: [
        {
          filename: `slvc_${data.idSolicitud}_solicitud_vacaciones.pdf`,
          content: bufferPDF,
          contentType: 'application/pdf' 
        }
      ]
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