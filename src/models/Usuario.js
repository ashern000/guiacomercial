import mongoose from "mongoose";
import bcrypt from "bcrypt";

/**
 * Esquema para criar realizar a query no banco de dados
 */

const usuarioEsquema = new mongoose.Schema(
  {
    nomeDeUsuario: {
      type: String,
      require: true,
    },
    senhaDeUsuario: {
      type: String,
      require: true,
      select: false,
      minlength: 5,
    },

    emailDeUsuario: {
      type: String,
      require: true,
      unique: true,
      lowercase: true,
    },

    cpfDoUsuario: {
      type: Number,
      require: true,
      unique: true,
    },

    avatarUsuario: {
      type: String,
      require: true,
    },

    empresasUsuario: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Empresa",
        require: true,
      },
    ],
  },
  { timestamps: true }
);

/**
 * Criando uma nova colecction e inserindo o esquema dentro dela
 */

const usuario = mongoose.model("Usuario", usuarioEsquema);

export default usuario;
