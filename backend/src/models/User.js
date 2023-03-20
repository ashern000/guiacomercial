const mongoose= require("mongoose")
const UserSchema = new mongoose.Schema({

    nameUser:{
        type:String,
        require:true,
        
    },
    passUser:{
        type:String,
        require:true,
    },

    emailUser:{
        type:String,
        require:true,
        index:true,
        unique:true,
     
    },

    cpfUser:{
        type:Number,
        require:true,
        index:true,
        unique:true,
      
    }
})

const User = mongoose.model("User", UserSchema)

module.exports = User