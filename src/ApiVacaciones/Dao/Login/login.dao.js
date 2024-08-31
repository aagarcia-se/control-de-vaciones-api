import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";


export const getLoginDataDao = async (data) =>{
    let dbConnection

    try{
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();
        const query = "select dp.idDpi, ip.idInfoPersonal,  em.idEmpleado, ip.primerNombre, ip.primerApellido, dp.numeroDocumento, us.usuario, us.idRol from usuarios us, dpiEmpleados dp, infoPersonalEmpleados ip, empleados em where dp.idDpi = ip.idDpi and ip.idInfoPersonal = em.idInfoPersonal and us.usuario = ? and us.pass = ?;"
        const [userData] = await dbConnection.query(query, [data.usuario, data.pass]);
        if(userData.length === 0){
            throw  {
                codRes: 401,
                message: "Usuario o contraseña incorrecta" 
            }
        }else{
            return userData[0];
        }

    }catch(error){
        throw error;
    }finally{
        await CloseConection(dbConnection);
    }
}