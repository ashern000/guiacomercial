import {autenticacao, emailAutenticacao} from "../services/auth.service.js";

export const autenticar = async(req,res) =>{
    const { emailDeUsuario, senhaDeUsuario } = await req.body

    const usuario = await autenticacao(req.body);
    console.log(usuario)
    if(usuario.passWord == true){
       return res.status(200).send({mensagem:"Logado!", usuario})
    }

    return res.status(404).send({mensagem:"Erro ao logar, usuario ou senha incorretos"})
}


