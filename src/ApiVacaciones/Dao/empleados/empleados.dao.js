
import { CloseConection, OpenConection } from "../Connection/ConexionV.dao.js";

export const IngresarEmpleadoDao = async (data) => {
    let dbConnection;
    try {
        dbConnection = await OpenConection();
        await dbConnection.beginTransaction();

        const query = "INSERT INTO empleados (idInfoPersonal, puesto, salario, fechaIngreso, correoInstitucional, extensionTelefonica, unidad, renglon, observaciones, coordinacion, tipoContrato, numeroCuentaCHN, numeroContrato, numeroActa, numeroAcuerdo ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);";

        const [result] = await dbConnection.query(query, [
            data.idInfoPersonal,
            data.puesto,
            data.salario,
            data.fechaIngreso,
            data.correoInstitucional,
            data.extensionTelefonica,
            data.unidad,
            data.renglon,
            data.observaciones,
            data.coordinancion, 
            data.tipoContrato,
            data.numeroCuentaCHN,
            data.numeroContrato,
            data.numeroActa,
            data.numeroAcuerdo
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
