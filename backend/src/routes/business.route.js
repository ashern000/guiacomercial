const route = require("express").Router()
const businessController = require("../controllers/business.controller")

route.post("/", businessController.create)
route.get("/", businessController.findAll)
route.get("/:category", businessController.findByCategory)

module.exports = route