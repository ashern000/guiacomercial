import bcrypt from "bcrypt";
import usuarioModel from "../models/Usuario.js";
import usuario from "../models/Usuario.js";
 
export const emailAutenticacao = (body)=>  usuarioModel.findOne({emailDeUsuario: body}).select("+senhaDeUsuario")

export const autenticacao = async (body) => {
    try{
    const usuario = await emailAutenticacao(body.emailDeUsuario)
    const passWord = bcrypt.compareSync(body.senhaDeUsuario,usuario.senhaDeUsuario)
    return {usuario:usuario.id, passWord:passWord}
} catch(err){
    return err
}

 /* export const geradorDeToken = (id)=> jwt.sign({id:autenticacao().passWord}, "minhachave de criptografia", {exp}) 
  */ 
}

