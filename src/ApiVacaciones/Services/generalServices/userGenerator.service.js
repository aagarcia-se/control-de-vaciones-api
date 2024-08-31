import { consultarExistenciaUsuarioDao } from "../../Dao/usuarios/usuarios.dao.js";


export const GenerarUsuarioService = async (data) => {
    try {
        const inicialNombre        = data.primerNombre.substring(0, 1).toLowerCase();
        const primerApellido       = data.primerApellido.toLowerCase();
        const segundoNombreInicial = data.segundoNombre.substring(0, 1).toLowerCase();
        const segundoApellido      = data.segundoApellido.toLowerCase();

        let nombreUsuario = inicialNombre + primerApellido;

        const user = await consultarExistenciaUsuarioDao(nombreUsuario);
        if(user && user.usuario){
            nombreUsuario = inicialNombre + segundoNombreInicial +  segundoApellido;
        }

        return nombreUsuario;

    } catch (error) {
        throw error;
    } 
}


export const GenerarPassword = () => {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const longitudMinima = 8;

    let password = '';

    for (let i = 0; i < longitudMinima; i++) {
        const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
        password += caracterAleatorio;
    }

    return password;
}

