const usuarioServico = require("../services/usuario.service");

const criarUsuario = async (req, res) => {
  const { nomeDeUsuario, emailDeUsuario, cpfDoUsuario, senhaDeUsuario } = await req.body;

  if (!nomeDeUsuario || !emailDeUsuario || !cpfDoUsuario || !senhaDeUsuario) {
    res.status(400).send({ msg: "Erro!" });
  }

  if(usuarioServico.verificarUsuario(cpfDoUsuario, emailDeUsuario)){
    res.status(402).send({msg:"Usuário já existente!"})
  }

  const usuario = await usuarioServico.criarUsuario(req.body);

  console.log(usuario)
  res.status(200).send({msg:"Sucesso", usuario:{
    nomeDeUsuario,
    emailDeUsuario
  }})
};

module.exports = { criarUsuario };
