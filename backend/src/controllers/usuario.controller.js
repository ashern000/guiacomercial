import usuarioServico from "../services/usuario.service.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * Função para criar usuários
 * @param {*} req paramêtro que espera os argumentos para criar o usuário, sendo eles: nome, email, cpf e senha
 * @param {*} res retorna uma resposta em forma de json que contém mensagem de sucesso, nome, email e o token, ou informando erro na criação
 * @returns tipo do erro
 */

const criarUsuario = async (req, res) => {
  try {
    const codigoDeErro = (parametros) => res.status(400).send(parametros);
    const codigoDeSucesso = (cookie, parametros) =>
      res
        .cookie(cookie.name, cookie.token, cookie.options)
        .status(200)
        .send(parametros);

    let {
      nomeDeUsuario,
      emailDeUsuario,
      cpfDoUsuario,
      senhaDeUsuario,
      avatarUsuario,
    } = await req.body;

    let usuarioInfomacoes =
      !nomeDeUsuario ||
      !emailDeUsuario ||
      !cpfDoUsuario ||
      !senhaDeUsuario ||
      !avatarUsuario;

    if (usuarioInfomacoes) {
      return codigoDeErro({ msg: "Erro, precisa de todas as informações!" });
    }

    const usuarioExistente = await usuarioServico.verificarUsuario(req.body);

    if (usuarioExistente) {
      return codigoDeErro({ msg: "Usuario existente!" });
    }

    req.body.senhaDeUsuario = bcrypt.hashSync(senhaDeUsuario, 10);

    const usuario = await usuarioServico.criarUsuario(req.body);

    if (!usuario) {
      return codigoDeErro({ msg: "Erro ao criar usuário" });
    }
    const token = jwt.sign(usuario.id, process.env.HASHBCRYPT);
    const cookieParams = {
      name: "acess_token",
      token,
      options: { httpOnly: true },
    };
    return codigoDeSucesso(cookieParams, {
      msg: "Usuário criado com sucesso!",
      usuario: {
        nomeDeUsuario,
        emailDeUsuario,
        avatarUsuario,
        token: token,
      },
    });
  } catch (error) {
    throw error;
  }
};

/**
 * Função para listar os usuários
 * @param {*} req não utiliza-se nesta função
 * @param {*} res retorna uma resposta sendo o array de objetos de usuários
 * @returns array de objetos
 */

const listarUsuarios = async (req, res) => {
  const codigoDeErro = (parametros) => res.status(400).send(parametros);
  const codigoDeSucesso = (parametros) => res.status(200).send(parametros);

  try {
    const usuarios = await usuarioServico.listarUsuarios();
    codigoDeSucesso({ usuarios });
  } catch (error) {
    codigoDeErro({ error });
  }
};

/**
 * Função para listar os usuários por id
 * @param {*} req middleware intercepcta antes
 * @param {*} res retorna a resposta sendo o usuário pelo id procurado
 * @returns objeto usuário
 */

const listarUsuarioPorId = async (req, res) => {
  const codigoDeErro = (parametros) => res.status(400).send(parametros);
  const codigoDeSucesso = (parametros) => res.status(200).send(parametros);

  try {
    const usuario = req.user;
    return codigoDeSucesso({ usuario });
  } catch (error) {
    return codigoDeErro({ mensagem: error.mensagem });
  }
};

/**
 * Função para alterar os dados do usuário
 * @param {*} req novos dados do usuário, sendo eles: nome, email, cpf, senha; necessita-se do id para achar o usuário correspondente e alterar
 * @param {*} res retorna a resposta da alteração, sendo de erro ou êxito
 * @returns
 */

const alterarUsuario = async (req, res) => {
  const codigoDeErro = (parametros) => res.status(400).send(parametros);
  const codigoDeSucesso = (parametros) => res.status(200).send(parametros);
  const {
    nomeDeUsuario,
    emailDeUsuario,
    cpfDoUsuario,
    senhaDeUsuario,
    idUsuario,
  } = await req.body;

  let usuarioInfomacoes =
    !nomeDeUsuario ||
    !emailDeUsuario ||
    !cpfDoUsuario ||
    !senhaDeUsuario ||
    !idUsuario;

  if (usuarioInfomacoes) {
    return codigoDeErro({ msg: "Erro, precisa de todas as informações!" });
  }

  try {
    const usuario = await usuarioServico.alterarUsuario(
      req.body,
      req.params.id
    );
    return codigoDeSucesso(usuario);
  } catch (error) {
    console.log(error);
    return codigoDeErro({ mensagem: "Erro ao alterar os dados do usuário" });
  }
};

export default {
  criarUsuario,
  listarUsuarios,
  listarUsuarioPorId,
  alterarUsuario,
};
