import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";


export const IngresarInfoPersonalDao = async (data) => {
    let connection;
    try {
        connection = await OpenConection();
        await connection.beginTransaction();

        const [existId] = await connection.query("SELECT idDpi FROM infoPersonalEmpleados WHERE idDpi = ? AND estado = 'A'", [data.idDpi]);
        if (existId.length === 1) {
            throw  {
                codRes: 409,
                meessage: "idDpi asociado a otro registro" 
            }
        }

        const [result] = await connection.query("INSERT INTO infoPersonalEmpleados (primerNombre, segundoNombre, tercerNombre, primerApellido, segundoApellido, apellidoCasada, numeroCelular, correoPersonal, direccionResidencia, idDpi, estadoCivil, Genero, departamentoNacimiento, municipioNacimiento, nit, numAfiliacionIgss, fechaNacimiento, numeroLicnecia, tipoLicencia) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [
            data.primerNombre,
            data.segundoNombre,
            data.tercerNombre,
            data.primerApellido,
            data.segundoApellido,
            data.apellidoCasada,
            data.numeroCelular,
            data.correoPersonal,
            data.direccionResidencia,
            data.idDpi,
            data.estadoCivil,
            data.Genero,
            data.departamentoNacimiento,
            data.municipioNacimiento,
            data.nit,
            data.numAfiliacionIgss,
            data.fechaNacimiento,
            data.numeroLicnecia,
            data.tipoLicencia
        ]);

        await connection.commit();
        return result.insertId;
    } catch (error) {
        if (connection) {
            await connection.rollback();
        }
        throw error;
    } finally {
        if (connection) {
            await CloseConection(connection);
        }
    }
}


export const ObtenerNombresDao = async (idEmpleado) => {
    let connection;
    try{
        connection = await OpenConection();

        const sql = 'select ip.primerNombre, ip.segundoNombre, ip.primerApellido, ip.segundoApellido from infoPersonalEmpleados ip, empleados e where ip.idInfoPersonal = e.idInfoPersonal and e.idEmpleado = ?;';

        const [nombres] = await connection.query(sql, [idEmpleado]);
        return nombres[0]; 
    }catch(error){
        return error;
    }finally{
        CloseConection(connection);
    }
}