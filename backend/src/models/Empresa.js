import mongoose from "mongoose";

const empresaModel = new mongoose.Schema({

    nomeEmpresa:{
        type:String,
        require:true,
    },

    emailEmpresa:{
        type:String,
        require:true,
        unique:true,
    },

    telefoneEmpresa:{
        type:Number,
        require:true,
    },

    cnpjEmpresa:{
        type:Number,
        require:true,
        unique:true,
    },

    enderecoEmpresa:{
        type:String,
        require:true,
    },
    
    categoriaEmpresa:{
        type:String,
        require:true,
    }

},{timestamps:true})

const Empresa = mongoose.model("empresas", empresaModel)
export default Empresa