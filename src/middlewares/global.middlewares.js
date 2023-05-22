import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import usuarioService from "../services/usuario.service.js";

/**
 * Função para verificar se o id é válido
 * @param {*} req recebe o id
 * @param {*} res retorna a resposta contendo a mensagem se o id é inválido
 * @param {*} next passa para a próxima função
 */

export const idValidado = (req, res, next) => {
  const token = req.token;

  if (!mongoose.Types.ObjectId.isValid(token))
    return res.status(400).send({ mensagem: "Id inválido" });

  next();
};

export const usuarioValidado = async (req, res, next) => {
  const token = req.token;

  const user = await usuarioService.listarUsuarioPorId(token);

  if (!user)
    return res.status(400).send({ mensagem: "Usuario não encontrado!" });

  next();
};

export const verificarToken = async (req, res, next) => {
  const token = req.cookies["acess_token"];

  if (!token)
    return res
      .status(401)
      .send({ mensagem: "Usuário não logado, realize o login!" });

  const autenticado = jwt.verify(token, process.env.HASHBCRYPT);

  const tokenDecoded = jwt.decode(token, process.env.HASHBCRYPT);

  if (!autenticado)
    return res
      .status(401)
      .send({ mensagem: "Usuário não logado, realize o login!" });

    req.token = tokenDecoded
  next();
};
