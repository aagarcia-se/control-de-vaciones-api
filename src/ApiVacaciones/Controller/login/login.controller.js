import { loginServices } from "../../Services/login/login.services.js";

export const loginController = async (req, res) => {
    try{
        const userData = await loginServices(req.body);
        const  userLogin = {
            status: 200,
            message: "Login realizado correctamente",
            userData
        }
        res
        .status(200)
        .json({userLogin});

    }catch(error){
        const status = error?.codRes || 500;
        const userLogin = {
            codErr: error.codRes,
            error: error?.message || error
        }

        res.status(status).json({ userLogin });
    }
}