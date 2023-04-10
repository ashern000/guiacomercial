import mongoose from "mongoose";
import bcrypt from "bcrypt"

const usuarioEsquema = new mongoose.Schema({

    nomeDeUsuario:{
        type:String,
        require:true,
        
    },
    senhaDeUsuario:{
        type:String,
        require:true,
        select:false,
        minlength:5
    },

    emailDeUsuario:{
        type:String,
        require:true,
        unique:true,
        lowercase:true,
     
    },

    cpfDoUsuario:{
        type:Number,
        require:true,
        unique:true,
    },

    empresasUsuario:{
        type:Array,
    }

    
}, {timestamps:true})


usuarioEsquema.pre("save", async function(next){
   let salts = await bcrypt.genSalt(10)
    this.senhaDeUsuario = await bcrypt.hash(this.senhaDeUsuario, salts)
    next()
})
const usuario = mongoose.model("Usuarios", usuarioEsquema)
export default usuario
