const mongoose = require("mongoose")

const ConnectToDB = ()=>{
    try{
        mongoose.connect("mongodb://localhost:2200/comart")
        console.log("Connected to DataBase!")
    }catch(error){
        console.log(error)
    }
}

module.exports = ConnectToDB