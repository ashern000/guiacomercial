import mongoose from "mongoose";

/**
 * This function connect to the database
 */

export const ConnectToDB = async () => {
  try {
    await mongoose
      .connect(
        `${process.env.MONGO_URI}://${process.env.HOST}:${process.env.PORT_DB}/${process.env.DATABASE}?directConnection=true&authSource=admin&replicaSet=${process.env.REPLICA_SET}&retryWrites=true`
      )
      .then(() => console.log("Conectado!"));
  } catch (error) {
    console.log(error);
  }
};
 