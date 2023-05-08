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
 * Função para listar os usuário
 * @returns retorna os usuários
 */

const listarUsuarios = () => usuarioModel.find();

/**
 * Função para listar os usuários por id
 * @param {*} idUsuario token do usuário
 * @returns retorna o usuário ou erro ao procurar
 */

const listarUsuarioPorId = (idUsuario) => usuarioModel.findById(idUsuario);

/**
 * Função para alterar os dados do usuário
 * @param {*} body dados do usuário para serem alterados
 * @param {*} id token do usuário para localizá-lo
 * @returns retorna o usuário já alterado
 */

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
  alterarUsuario,
};
