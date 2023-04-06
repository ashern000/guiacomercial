import mongoose from "mongoose";

/**
* This function connect to the database
*/

export const ConnectToDB = async()=>{
    try{
       await mongoose.connect(`mongodb://${process.env.MONGO_URI}/comart`).then(() => console.log("Conectado!"))
    }catch(error){
        console.log(error)
    }
}

