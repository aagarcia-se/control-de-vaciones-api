import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";


export const IngresarSolicitudDao = async (data) => {
    let Connection;
    try{
        Connection = await OpenConection();
        const [result] = await Connection.query(`insert into solicitudes_vacaciones (idEmpleado, idInfoPersonal, 
                                                unidadSolicitud,fechaInicioVacaciones, fechaFinVacaciones, 
                                                fechaRetornoLabores, cantidadDiasSolicitados)
                                                 values 
                                                 (?, ?, ?, ?, ?, ?, ?);`, 
            [data.idEmpleado,
             data.idInfoPersonal,
             data.unidadSolicitud, 
             data.fechaInicioVacaciones,
             data.fechaFinVacaciones,
             data.fechaRetornoLabores,
             data.cantidadDiasSolicitados
            ]);
        await Connection.commit();
        return result.insertId;
    }catch(error){
        throw error;
    }finally{
        CloseConection(Connection);
    }

}


export const eliminarSolicitudDao = async (idSolicitud) => {
    let Connection;
    try{
        Connection = await OpenConection();
        const [result] = await Connection.query(`update solicitudes_vacaciones set estado = 'N'
                                                 where idSolicitud = ?`, 
            [idSolicitud]);
        return result.changedRows;
    }catch(error){
        throw error;
    }finally{
        CloseConection(Connection);
    }

}

export const actualizarEstadoSolicitudDao = async (data) => {
    console.log(data)
    let Connection;
    try{
        Connection = await OpenConection();
        const [result] = await Connection.query(`UPDATE solicitudes_vacaciones 
                                                    SET estadoSolicitud = ? 
                                                    WHERE idSolicitud = ? 
                                                    AND idEmpleado = ?;`, 
            [data.estadoSolicitud, data.idSolicitud, data.idEmpleado]);
            await Connection.commit();
        return result.changedRows;
    }catch(error){
        throw error;
    }finally{
        CloseConection(Connection);
    }

}

