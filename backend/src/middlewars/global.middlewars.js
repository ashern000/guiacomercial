import mongoose from "mongoose"

import usuarioService from "../services/usuario.service.js"

export const idValidado = (req,res,next) =>{
    const id = req.params.id

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).send({message: "Id inválido"})
      }

    next()
}

export const usuarioValidado = async(req,res,next) =>{

    const id = req.params.id;

    const user = await usuarioService.listarUsuarioPorId(id);
  
    if (!user) {
      return res.status(400).send({
        message: "Usuario não encontrado!",
      });
    }
  
    req.id = id;
    req.user = user;
  
    next();
}
