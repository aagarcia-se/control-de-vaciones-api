import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

export const IngresarPertenenciaSoLi = async (data) => {
    let dbConnection;
    try {
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const query = "INSERT INTO pertenenciaSociolinguistica (idInfoPersonal, etnia, comunidadLinguistica) VALUES (?, ?, ?);";

        const [result] = await dbConnection.query(query, [
            data.idInfoPersonal,
            data.etnia,
            data.comunidadLinguistica
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
