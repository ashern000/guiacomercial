const mongoose = require("mongoose")

const businessSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    telefone:{
        type:Number,
        require:true,
    },
    cnpj:{
        type:Number,
        require:true,
    },
    endereco:{
        type:String,
        require:true,
    }

},{timestamps:true})

const Business = mongoose.model("business", businessSchema)

module.exports = Business