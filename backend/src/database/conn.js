import mongoose from "mongoose";

/**
 * This function connect to the database
 */

export const ConnectToDB = async () => {
  try {
    await mongoose
      .connect(
        `${process.env.MONGO_URI}://${process.env.HOST}:${process.env.PORT_DB}/${process.env.DATABASE}`,
        { useNewUrlParser: true }
      )
      .then(() => console.log("Conectado!"));
  } catch (error) {
    console.log(error);
  }
};
