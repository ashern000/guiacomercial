import mongoose from "mongoose";
import services from "../services/empresa.service.js";
import usuarioService from "../services/usuario.service.js";
import usuarioModel from "../models/Usuario.js";
import Empresa from "../models/Empresa.js";

const criarEmpresa = async (req, res) => {
  const {
    nomeEmpresa,
    emailEmpresa,
    telefoneEmpresa,
    cnpjEmpresa,
    enderecoEmpresa,
    categoriaEmpresa,
    usuarioId,
  } = await req.body;

  const infomacoes =
    !nomeEmpresa ||
    !emailEmpresa ||
    !telefoneEmpresa ||
    !cnpjEmpresa ||
    !enderecoEmpresa ||
    !categoriaEmpresa ||
    !usuarioId;

  if (infomacoes) {
    res.status(400).send({ msg: "Erro, prencha todas as informações" });
  }

  try{
  const usuario = await usuarioModel.findById(req.body.usuarioId);
  const empresa = new Empresa({
    nomeEmpresa,
    emailEmpresa,
    telefoneEmpresa,
    cnpjEmpresa,
    enderecoEmpresa,
    categoriaEmpresa
  })
  
  const session = await mongoose.startSession();
  session.startTransaction();
  await empresa.save({ session })
  await usuario.empresasUsuario.push(empresa);
  await usuario.save({ session }); 
  session.commitTransaction();


  res.status(200).send({
    msg: "Sucesso",
    empresa: {
      nomeEmpresa,
      emailEmpresa,
      telefoneEmpresa,
      cnpjEmpresa,
      enderecoEmpresa,
      categoriaEmpresa,
    },
  });
}catch(err){
  return err
}
};

const buscarTodas = async (req, res) => {
  const empresa = await services.buscarTodas();
  res.status(200).send(empresa);
};

const buscarPorCategoria = async (req, res) => {
  const empresa = await services.buscarPorCategoria(req.params.categoria);

  res.status(200).send({ msg: "Achou!", empresa });
};

export default { criarEmpresa, buscarPorCategoria, buscarTodas };
