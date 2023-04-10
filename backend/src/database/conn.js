import mongoose from "mongoose";

/**
* This function connect to the database
*/

export const ConnectToDB = async()=>{
    try{
       await mongoose.connect('mongodb://localhost:27017',
       { useNewUrlParser: true }).then(() => console.log("Conectado!"))
    }catch(error){
        console.log(error)
    }
}

