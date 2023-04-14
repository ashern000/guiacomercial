import bcrypt from "bcrypt";
import usuarioModel from "../models/Usuario.js";
import jwt from "jsonwebtoken";

export const emailAutenticacao = (body) =>
  usuarioModel.findOne({ emailDeUsuario: body }).select("+senhaDeUsuario");

export const autenticacao = async (body) => {
  try {
    const usuario = await emailAutenticacao(body.emailDeUsuario);
    const passWord = bcrypt.compareSync(
      body.senhaDeUsuario,
      usuario.senhaDeUsuario
    );
    return { usuario: usuario.id, passWord: passWord, token: jwt.sign(usuario.id, "secretKey") };
  } catch (err) {
    return err;
  }

  


};
