const UserService = require("../services/user.service");

const create = async (req, res) => {
  const { nameUser, emailUser, cpfUser, passUser } = await req.body;

  if (!nameUser || !emailUser || !cpfUser || !passUser) {
    res.status(400).send({ msg: "Error!" });
  }

  const user = await UserService.create(req.body);

  console.log(user)
  res.status(200).send({msg:"sucess", user:{
    nameUser,
    emailUser
  }})
};

module.exports = { create };
