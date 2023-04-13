import empresaModel from "../models/Empresa.js";
import mongoose from "mongoose";
 const criarEmpresa = (body)=> empresaModel.create(body)

 const buscarTodas = ()=> empresaModel.find()

 const buscarPorCategoria = (categoria) =>{
    return empresaModel.find({nomeEmpresa:categoria})
}

export default { criarEmpresa, buscarTodas, buscarPorCategoria }