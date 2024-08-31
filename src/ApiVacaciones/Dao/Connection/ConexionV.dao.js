import { createPool } from "mysql2/promise";

export const Connection = createPool({
    host: 'biyrvwb9jjv2p5txmzbe-mysql.services.clever-cloud.com',
    user: 'umtiagcmlyb8i1fn',
    password: 'b7U6uKX1C761lPxpcuJc',
    port: 3306,
    database: 'biyrvwb9jjv2p5txmzbe'
});

// Función para establecer la conexión
export const OpenConection = async () => {
    try {
        // Obtener una conexión del pool
        const connection = await Connection.getConnection();
        console.log('Conexión establecida correctamente');
        return connection;
    } catch (error) {
        console.error('Error al establecer la conexión:', error.sqlMessage);
        // Realizar acciones de manejo de errores, como enviar una respuesta de error al cliente
        throw error;
    }
};

// Función para cerrar la conexión
export const CloseConection = async (connection) => {
    if (connection) {
        await connection.release();
        console.log('Conexión cerrada correctamente');
    }
};
