import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";



export const IngresarFamiliarDao = async (data) => {
    let connection;
    try {
        connection = await OpenConection();
        await connection.beginTransaction();

        const query = "INSERT INTO familiaresDeEmpleados (idInfoPersonal, nombreFamiliar, telefono, parentesco, fechaNacimiento) VALUES (?, ?, ?, ?, ?);";

        const [result] = await connection.query(query, [
            data.idInfoPersonal,
            data.nombreFamiliar,
            data.telefono,
            data.parentesco,
            data.fechaNacimiento,
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
