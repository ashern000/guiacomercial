const mongoose= require("mongoose")
const usuarioSchema = new mongoose.Schema({

    nomeDeUsuario:{
        type:String,
        require:true,
        
    },
    senhaDeUsuario:{
        type:String,
        require:true,
    },

    emailDeUsuario:{
        type:String,
        require:true,
        index:true,
        unique:true,
     
    },

    cpfDoUsuario:{
        type:Number,
        require:true,
        index:true,
        unique:true,
      
    }
})

const Usuario = mongoose.model("Usuarios", usuarioSchema)

module.exports = Usuario