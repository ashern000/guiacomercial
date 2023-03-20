const UserModel = require("../models/User")

const create = (body)=> UserModel.create(body)

module.exports = { create }
