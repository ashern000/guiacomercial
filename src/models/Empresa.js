import mongoose from "mongoose";

/**
 * Esquema para criar realizar a query no banco de dados
 */

const empresaModel = new mongoose.Schema(
  {
    nomeEmpresa: {
      type: String,
      require: true,
    },

    emailEmpresa: {
      type: String,
      require: true,
      unique: true,
    },

    telefoneEmpresa: {
      type: Number,
      require: true,
    },

    cnpjEmpresa: {
      type: Number,
      require: true,
      unique: true,
    },

    enderecoEmpresa: {
      type: String,
      require: true,
    },

    categoriaEmpresa: {
      type: String,
      require: true,
    },

    usuario: {
      type: mongoose.Types.ObjectId,
      ref: "Usuario",
      require: true,
    },
  },
  { timestamps: true }
);

/**
 * Criando uma nova colecction e inserindo o esquema dentro dela
 */

const Empresa = mongoose.model("Empresa", empresaModel);
export default Empresa;
