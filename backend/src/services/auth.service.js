import bcrypt from "bcrypt";
import usuarioModel from "../models/Usuario.js";
import jwt from "jsonwebtoken";
import { config } from "dotenv";

config();

/**
 * Função para verificar o email
 * @param {*} body email para verificar se existe
 * @returns retorna a senha para comparar se é igual
 */

export const emailAutenticacao = (body) =>
  usuarioModel.findOne({ emailDeUsuario: body }).select("+senhaDeUsuario");

/**
 * Esta função serve para realizar a autenticação do usuário, ela retorna um boolean e os dados do usuário.
 * @param {*} body dados para a autenticação: email e senha
 * @returns login do usuário mais token ou mensagem de erro
 */

export const autenticacao = async (body) => {
  try {
    const usuario = await emailAutenticacao(body.emailDeUsuario);
    const passWord = await bcrypt.compare(
      body.senhaDeUsuario,
      usuario.senhaDeUsuario
    );
    return {
      usuario: usuario.id,
      passWord,
      token: jwt.sign(usuario.id, process.env.HASHBCRYPT),
    };
  } catch (err) {
    return err;
  }
};
