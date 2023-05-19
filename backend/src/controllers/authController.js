import { autenticacao } from "../services/auth.service.js";

/**
 * Esta função serve para realizar a autenticação do usuário
 * @param {*} body dados para a autenticação: email e senha
 * @returns dados do usuário, contém o token e id, ou retorna uma mensagem de erro
 */

export const autenticar = async (req, res) => {
  console.log(req.body);
  const usuario = await autenticacao(req.body);
  console.log(usuario);
  if (usuario.passWord == true) {
    return res
      .status(200)
      .send({ statusLogin: true, msg: "Usuário criado com sucesso", usuario });
  }
  return res
    .status(404)
    .send({ mensagem: "Erro ao logar, usuario ou senha incorretos" });
};
