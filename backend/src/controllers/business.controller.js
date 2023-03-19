const businessService = require("../services/business.service")

const create = async(req,res) => {

    const{name, email, telefone, cnpj, endereco} = await req.body

    if(!name || !email || !telefone || !cnpj || !endereco){
        res.status(400).send({msg:"Error"})
    }

    const business = await businessService.create(req.body)

    res.status(200).send({
        msg:"sucess",
        business:{
            name,
            email,
            telefone,
            cnpj,
            endereco
        }
    },
    
    )

}


const findAll = async(req,res)=>{

    const business =await businessService.findAll()

    res.status(200).send(business)
    
}

const findByCategory = async(req,res)=>{

    const business = await businessService.findByCategory(req.params.category)
    
    res.status(200).send({msg:"find", business})

}

module.exports = {create, findAll, findByCategory}