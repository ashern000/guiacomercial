import mongoose from "mongoose";

/**
 * This function connect to the database
 */

export const ConnectToDB = async () => {
  try {
    await mongoose
      .connect(
       "mongodb://127.0.0.1:27017"
       // or `${process.env.MONGO_URI}://${process.env.HOST}:${process.env.PORT_DB}/${process.env.DATABASE}`
      )
      .then(() => console.log("Conectado!"));
  } catch (error) {
    console.log(error);
  }
};
