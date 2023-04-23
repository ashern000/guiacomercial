import mongoose from "mongoose";

/**
 * This function connect to the database
 */

export const ConnectToDB = async () => {
  try {
    await mongoose
      .connect(
       "mongodb+srv://asher:AsherNovelli150$@cluster0.7edrehg.mongodb.net/?retryWrites=true&w=majority"
       // or `${process.env.MONGO_URI}://${process.env.HOST}:${process.env.PORT_DB}/${process.env.DATABASE}`
      )
      .then(() => console.log("Conectado!"));
  } catch (error) {
    console.log(error);
  }
};
