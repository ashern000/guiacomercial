import mongoose from "mongoose";

/**
 * This function connect to the database
 */

export const ConnectToDB = async () => {
  try {
    await mongoose
      .connect(
       "mongodb://localhost:27017/comart?directConnection=true&authSource=admin&replicaSet=myReplicaSet&retryWrites=true"
       // or `${process.env.MONGO_URI}://${process.env.HOST}:${process.env.PORT_DB}/${process.env.DATABASE}`
      )
      .then(() => console.log("Conectado!"));
  } catch (error) {
    console.log(error);
  }
};
