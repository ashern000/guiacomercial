import empresaModel from "../models/Empresa.js";

/**
 * Função para criar a empresa
 * @param {*} body dados da empresa, tais como nome, cnpj, email, endereço, categoria, telefone e token do usuário
 */

const criarEmpresa = (body) => empresaModel.create(body);

/**
 * Função para listar as empresas
 * @returns array de objetos
 */

const buscarTodas = () => empresaModel.find();

/**
 * Função para buscar as empresas por categoria
 * @param {*} categoria categoria empresa
 * @returns array de objetos filtrados por categoria
 */

const buscarPorCategoria = (categoria) => {
  return empresaModel.find({ nomeEmpresa: categoria });
};

/**
 * Função para buscar as empresas por cnpj
 * @param {*} cnpj CNPJ da empresa
 * @returns array de objetos filtrados por cnpj
 */

const buscarPorCnpj = (cnpj) => empresaModel.find({ cnpjEmpresa: cnpj });

export default { criarEmpresa, buscarTodas, buscarPorCategoria, buscarPorCnpj };
