import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

export const IngresarNivelEducativoDao = async (data) => {
    let dbConnection;
    try {
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const query = "INSERT INTO nivelEducativo (idInfoPersonal, nivelDeEstudios, ultimoNivelAlcanzado, añoUltimoNivelCursado, Profesion, numeroColegiado, fechaColegiacion) VALUES (?, ?, ?, ?, ?, ?, ?);";

        const [result] = await dbConnection.query(query, [
            data.idInfoPersonal,
            data.nivelDeEstudios,
            data.ultimoNivelAlcanzado,
            data.añoUltimoNivelCursado,
            data.Profesion,
            data.numeroColegiado,
            data.fechaColegiacion
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
