import mongoose from "mongoose";
import services from "../services/empresa.service.js";
import usuarioService from "../services/usuario.service.js";

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

  const session = await mongoose.startSession();
  session.startTransaction();
  console.log("Oi");
  const usuario = await usuarioService.listarUsuarioPorId(req.body.usuarioId);
  console.log(usuario.id);
  const empresa = await services.criarEmpresa(req.body);
  await usuario.save({ session });
  await empresa.usuario.push({ session });
  session.commitTransaction();
  session.endSession();

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
