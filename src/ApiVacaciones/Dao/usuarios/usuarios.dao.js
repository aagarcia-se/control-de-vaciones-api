import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

export const CrearUsuarioDao = async (data) => {
    let dbConnection;
    try {
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const query = "insert into usuarios (idEmpleado, idRol, usuario, pass) values (?, ?, ?, ?);";

        const [result] = await dbConnection.query(query, [
            data.idEmpleado,
            data.idRol,
            data.user,
            data.pass
        ]);

        await dbConnection.commit();
        return result.insertId;
    } catch (error) {
        if (dbConnection) {
            await dbConnection.rollback();
        }
        throw error;
    } finally {
        if (dbConnection) {
            await CloseConection(dbConnection);
        }
    }
}


export const consultarExistenciaUsuarioDao = async (nombreUsuario) => {
    let dbConnection;
    try{
        dbConnection = await OpenConection();

        const sql = 'select usuario from usuarios where usuario = ?;';

        const [usuario] = await dbConnection.query(sql, [nombreUsuario]);
        return usuario[0]; 
    }catch(error){
        return error;
    }finally{
        CloseConection(dbConnection);
    }
}