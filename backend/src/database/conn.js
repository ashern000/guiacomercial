const mongoose = require("mongoose")

/**
* This function connect to the database
*/

const ConnectToDB = ()=>{
    try{
        mongoose.connect("mongodb://localhost:2222/comart")
        console.log("Connected to DataBase!")
    }catch(error){
        console.log(error)
    }
}

module.exports = ConnectToDB
