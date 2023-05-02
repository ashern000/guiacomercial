import {autenticacao} from "../services/auth.service.js";

export const autenticar = async(req,res) =>{
    const usuario = await autenticacao(req.body);
    if(usuario.passWord == true){
       return res.status(200).send({statusLogin:true, usuario})
    }
    return res.status(404).send({mensagem:"Erro ao logar, usuario ou senha incorretos"})
}


