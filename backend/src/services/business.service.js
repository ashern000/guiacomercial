const business = require("../models/Business")

const create = (body)=> business.create(body)

const findAll = ()=>business.find()

const findByCategory = (category) =>{
    return business.find({name:category})
}

module.exports = { create, findAll, findByCategory }