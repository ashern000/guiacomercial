import mongoose, { mongo } from "mongoose";
import services from "../services/empresa.service.js";
import usuarioService from "../services/usuario.service.js";

const criarEmpresa = async (req, res) => {

    const { nomeEmpresa, emailEmpresa, telefoneEmpresa, cnpjEmpresa, enderecoEmpresa, categoriaEmpresa, usuarioId } = await req.body

    if (!nomeEmpresa || !emailEmpresa || !telefoneEmpresa || !cnpjEmpresa || !enderecoEmpresa || !categoriaEmpresa || !usuarioId) {
        res.status(400).send({ msg: "Erro" })
    }

    const session = await mongoose.startSession()
    session.startTransaction()
    const usuario = await usuarioService.listarUsuarioPorId(usuarioId);
    const empresa = await services.criarEmpresa(req.body);
    usuario.empresasUsuario.push(empresa.nomeEmpresa);
    await usuario.save({session})
    await empresa.usuario.push({session});
    session.commitTransaction();
    session.endSession()



    res.status(200).send({
        msg: "Sucesso",
        empresa: {
            nomeEmpresa,
            emailEmpresa,
            telefoneEmpresa,
            cnpjEmpresa,
            enderecoEmpresa,
            categoriaEmpresa
        }
    },

    )

    

}

const buscarTodas = async (req, res) => {

    const empresa = await services.buscarTodas()
    res.status(200).send(empresa)

}

const buscarPorCategoria = async (req, res) => {

    const empresa = await services.buscarPorCategoria(req.params.categoria)

    res.status(200).send({ msg: "Achou!", empresa })

}

export default { criarEmpresa, buscarPorCategoria, buscarTodas }