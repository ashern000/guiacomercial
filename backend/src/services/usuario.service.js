import usuarioModel from "../models/Usuario.js";

/**
 * Função para criar usuarios
 * @param body requer o corpo da requisição para criar usuario
 */

const verificarUsuario = (body) =>
  usuarioModel.exists({
    emailDeUsuario: body.emailDeUsuario,
    cpfDoUsuario: body.cpfDoUsuario,
  });

const criarUsuario = (body) => usuarioModel.create(body);

const listarUsuarios = () => usuarioModel.find();

const listarUsuarioPorId = (idUsuario) => usuarioModel.findById(idUsuario);

const login = (body) =>
  usuarioModel.find({
    emailDeUsuario: body.emailDeUsuario,
    senhaDeUsuario: body.senhaDeUsuario,
  });

export default {
  criarUsuario,
  verificarUsuario,
  listarUsuarios,
  listarUsuarioPorId,
  login,
};
