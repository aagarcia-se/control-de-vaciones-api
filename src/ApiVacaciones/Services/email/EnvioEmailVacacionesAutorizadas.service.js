import { transporter } from "./Transporter";


export const EnviarMailAutorizacionDeVacaciones = async (data) => {
  
    // Detalles del correo electrónico
    const mailOptions = {
      from: "gestionesrrhhiga@gmail.com",
      to: data.correo,
      cc: data.corroCoordinador,
      subject: "Vacaciones autorizadas no-replay",
      html: `
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bienvenido a VCN Sistem</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
          }
      
          .container {
            max-width: 600px;
            margin: 20px auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          }
      
          .header {
            background-color: #007bff;
            color: #ffffff;
            padding: 20px;
            text-align: center;
          }
      
          .content {
            padding: 20px;
          }
      
          .footer {
            background-color: #f4f4f4;
            padding: 10px;
            text-align: center;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Bienvenido a VCN Sistem</h1>
          </div>
          <div class="content">
            <p>Hola,</p>
            <p>Bienvenido a VCN Sistem. Te damos la bienvenida a nuestra plataforma.</p>
            <p>Tu información de inicio de sesión es la siguiente:</p>
            <ul>
              <li><strong>Usuario de ingreso:</strong> ${data.user}</li>
              <li><strong>Contraseña temporal:</strong> ${data.pass}</li>
            </ul>
            <p>Por favor, inicia sesión con esta información y considera cambiar tu contraseña después del primer inicio de sesión.</p>
          </div>
          <div class="footer">
            <p>Gracias por unirte a VCN Sistem. Si tienes alguna pregunta, no dudes en ponerte en contacto con nuestro equipo de soporte.</p>
          </div>
        </div>
      </body>
      </html>
      `,
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