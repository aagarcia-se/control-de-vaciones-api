import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

export const IngresarDatosMedicosDao = async (data) => {
    let dbConnection;
    try {
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const query = "INSERT INTO datosMedicos (idInfoPersonal, discapacidad, tipoDiscapacidad, tipoSangre, condicionMedica, tomaMedicina, nombreMedicamento, sufreAlergia) VALUES (?, ?, ?, ?, ?, ?, ?, ?);";

        const [result] = await dbConnection.query(query, [
            data.idInfoPersonal,
            data.discapacidad,
            data.tipoDiscapacidad,
            data.tipoSangre,
            data.condicionMedica,
            data.tomaMedicina,
            data.nombreMedicamento,
            data.sufreAlergia
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
