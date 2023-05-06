import mongoose from "mongoose";

/**
 * Esta função é responsável de realizar a conexão com o banco de dados.
 * As variáveis para a conexão vem do arquivo de configuração `.env`
 * @returns status da conexão, êxito ou falha
 */

export const ConnectToDB = async () => {
  try {
    await mongoose
      .connect(
        `${process.env.MONGO_URI}://${process.env.HOST}:${process.env.PORT_DB}/${process.env.DATABASE}?directConnection=true&authSource=admin&replicaSet=${process.env.REPLICA_SET}&retryWrites=true`
      ,{useNewUrlParser: true})
      .then(() => console.log("Conectado!"));
  } catch (error) {
    console.log(error);
  }
};
