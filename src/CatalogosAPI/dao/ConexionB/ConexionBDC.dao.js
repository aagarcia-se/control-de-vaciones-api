import { createPool } from "mysql2/promise";

export const Connection = createPool({
    host: 'bfegfxitfgbdtrqehhtr-mysql.services.clever-cloud.com',
    user: 'ugsqossvd4boz1c5',
    password: 'abHjH6zszAfNysYa9GEp',
    port: 3306,
    database: 'bfegfxitfgbdtrqehhtr'
});

// Función para establecer la conexión
export const ConectarBDCatalogos = async () => {
    try {
        // Obtener una conexión del pool
        const connection = await Connection.getConnection();
        console.log('BD Catalogos abierta');
        return connection;
    } catch (error) {
        console.error('Error al establecer la conexión:', error.sqlMessage);
        // Realizar acciones de manejo de errores, como enviar una respuesta de error al cliente
        throw error;
    }
};

// Función para cerrar la conexión
export const CerraBDCatalogos = (connection) => {
    if (connection) {
        connection.release();
        console.log('BD catalogos Cerrada');
    }
};
