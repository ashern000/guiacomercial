import usuarioModel from "../models/Usuario.js";

/**
 * Função para verificar se existe o usuário no banco de dados
 * @param  body requer o corpo da requisição para verificar se o usuário existe no banco de dados
 */

const verificarUsuario = (body) =>
  usuarioModel.exists({
    emailDeUsuario: body.emailDeUsuario,
    cpfDoUsuario: body.cpfDoUsuario,
  });

/**
 * Função para criar usuarios
 * @param body requer o corpo da requisição para criar usuario
 */

const criarUsuario = (body) => usuarioModel.create(body);

/**
 * @return retorna os usuários do banco de dados
 */

const listarUsuarios = () => usuarioModel.find();

const listarUsuarioPorId = (idUsuario) => usuarioModel.findById(idUsuario);

const login = (body) =>
  usuarioModel.find({
    emailDeUsuario: body.emailDeUsuario,
    senhaDeUsuario: body.senhaDeUsuario,
  });

const alterarUsuario = (body, id) => {
  return usuarioModel.findByIdAndUpdate(id, {
    nomeDeUsuario: body.nomeDeUsuario,
    senhaDeUsuario: body.senhaDeUsuario,
    emailDeUsuario: body.emailDeUsuario,
  });
};

export default {
  criarUsuario,
  verificarUsuario,
  listarUsuarios,
  listarUsuarioPorId,
  login,
  alterarUsuario,
};
