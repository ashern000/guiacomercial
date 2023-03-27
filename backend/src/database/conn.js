import mongoose from "mongoose";

/**
* This function connect to the database
*/

export const ConnectToDB = async()=>{
    try{
       await mongoose.connect("mongodb://localhost:2222/comart").then(() => console.log("Connected"))
    }catch(error){
        console.log(error)
    }
}

