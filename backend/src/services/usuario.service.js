const usuarioModel = require("../models/Usuario")

/**
 * Função para criar usuarios
 * @param body requer o corpo da requisição para criar usuario
 */

const criarUsuario = (body)=> usuarioModel.create(body)
const verificarUsuario = (cpfDoUsuario, emailDeUsuario) => usuarioModel.find({cpfDoUsuario: cpfDoUsuario, emailDeUsuario:emailDeUsuario})

module.exports = { criarUsuario, verificarUsuario }
