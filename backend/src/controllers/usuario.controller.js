import usuarioServico from "../services/usuario.service.js";

const criarUsuario = async (req, res) => {
  try {
    const codigoDeErro = (parametros) => res.status(400).send(parametros);
    const codigoDeSucesso = (parametros) => res.status(200).send(parametros);

    const { nomeDeUsuario, emailDeUsuario, cpfDoUsuario, senhaDeUsuario } =
      await req.body;

    let usuarioInfomacoes =
      !nomeDeUsuario || !emailDeUsuario || !cpfDoUsuario || !senhaDeUsuario;

    if (usuarioInfomacoes) {
      return codigoDeErro({ msg: "Erro, precisa de todas as informações!" });
    }

    const usuarioExistente = await usuarioServico.verificarUsuario(req.body);

    if (usuarioExistente) {
      return codigoDeErro({ mensagem: "Usuario existente!" });
    }

    const usuario = await usuarioServico.criarUsuario(req.body);

    if (!usuario) {
      return codigoDeErro({ msg: "Erro ao criar usuário" });
    }

    return codigoDeSucesso({
      msg: "Usuário criado com sucesso!",
      usuario: {
        id: usuario._id,
        nomeDeUsuario,
        emailDeUsuario,
      },
    });
  } catch (error) {
    throw error;
  }
};

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

export default { criarUsuario, listarUsuarios, listarUsuarioPorId };
