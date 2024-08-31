import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";


export const IngresarInformacionDpiDao = async (data) => {
    let Connection;
    try{
        Connection = await OpenConection();
        const [existingDpi] = await Connection.query("select numeroDocumento from dpiEmpleados where numeroDocumento = ? and estado = 'A';", [data.numeroDocumento]);
        if(existingDpi.length === 1){
            throw  {
                codRes: 409,
                message: "NUMERO DOCUMENTO INGRESADO YA EXISTE" 
            }
        }else{
            const [result] = await Connection.query("insert into dpiEmpleados (numeroDocumento, departamentoExpedicion, municipioExpedicion, fechaVencimientoDpi) values (?, ?, ?, ?);", [data.numeroDocumento, data.departamentoExpedicion, data.municipioExpedicion, data.fechaVencimientoDpi]);
            return result.insertId;
        }
    }catch(error){
        throw error;
    }finally{
        CloseConection(Connection);
    }

}


export const ConsultarDpiDao = async (numeroDocumento) => {
    try{
        const [dpi] = await Connection.query("select idDpi, numeroDocumento, departamentoExpedicion, municipioExpedicion, fechaVencimientoDpi, estado from dpiEmpleados where numeroDocumento = ? and estado = 'A';", [numeroDocumento]);
       
        if (dpi.length === 0) {
            throw  {
                codeError: 101,
                message: "No se encontro el DPI consultado"
            }
        }
        return dpi; 
    }catch(error){
        throw error;
     }
};