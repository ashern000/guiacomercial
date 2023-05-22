import mongoose from "mongoose";
import usuarioService from "../services/usuario.service.js";
import empresaService from "../services/empresa.service.js";
import usuarioModel from "../models/Usuario.js";
import Empresa from "../models/Empresa.js";

/**
 * Função para criar a empresa
 * @param {*} body necessita dos seguintes dados: nome, email, telefone, cnpj, endereço, categoria e o token do usuário
 * @returns retorna a empresa criada e os dados cadastrados, ou erro ao criar
 */

const criarEmpresa = async (req, res) => {
  const codigoDeErro = (parametros) => res.status(400).send(parametros);
  const codigoDeSucesso = (parametros) => res.status(200).send(parametros);

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
    return codigoDeErro({ msg: "Erro, prencha todas as informações" });
  }

  try {
    const usuario = await usuarioModel.findById(req.body.usuarioId);
    if (!usuario) {
      return codigoDeErro({ msg: "Usuário não existente!" });
    }
    console.log("Debug");
    const empresaExistente = await empresaService.buscarPorCnpj(
      req.body.cnpjEmpresa
    );
    console.log("Debug");
    if (!empresaExistente) {
      return codigoDeErro({
        msg: "empresa existente",
        cnpj: req.body.cnpjEmpresa,
      });
    }
    console.log("Debug");
    const empresa = new Empresa({
      nomeEmpresa,
      emailEmpresa,
      telefoneEmpresa,
      cnpjEmpresa,
      enderecoEmpresa,
      categoriaEmpresa,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    await empresa.save({ session });
    await usuario.empresasUsuario.push(empresa);
    await usuario.save({ session });
    session.commitTransaction();

    codigoDeSucesso({
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
  } catch (err) {
    return err;
  }
};

/**
 * Função para listar todas as empresas
 * @returns array de objetos
 */

const buscarTodas = async (req, res) => {
  const empresa = await empresaService.buscarTodas();
  res.status(200).send(empresa);
};

/**
 * Função para listar todas as empresas por categoria
 * @param {*} req necessita da categoria para realizar o filto
 * @param {*} res retorna uma resposta contendo a mensagem e as empresas
 * @returns array de objetos filtrados por categoria
 */

const buscarPorCategoria = async (req, res) => {
  const empresa = await empresaService.buscarPorCategoria(req.params.categoria);
  res.status(200).send({ msg: "Achou!", empresa });
};

export default { criarEmpresa, buscarPorCategoria, buscarTodas };
