const empresa = require("../models/Empresa")

const criarEmpresa = (body)=> empresa.create(body)

const buscarTodas = ()=> empresa.find()

const buscarPorCategoria = (categoria) =>{
    return empresa.find({nomeEmpresa:categoria})
}

module.exports = { criarEmpresa, buscarTodas, buscarPorCategoria }