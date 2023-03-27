import services from "../services/empresa.service.js";


 const criarEmpresa = async(req,res) => {

    const{nomeEmpresa, emailEmpresa, telefoneEmpresa, cnpjEmpresa, enderecoEmpresa, categoriaEmpresa} = await req.body

    if(!nomeEmpresa || !emailEmpresa || !telefoneEmpresa || !cnpjEmpresa || !enderecoEmpresa, !categoriaEmpresa){
        res.status(400).send({msg:"Erro"})
    }

    const empresa = await services.criarEmpresa(req.body)

    res.status(200).send({
        msg:"Sucesso",
        empresa:{
            nomeEmpresa,
            emailEmpresa,
            telefoneEmpresa,
            cnpjEmpresa,
            enderecoEmpresa,
            categoriaEmpresa
        }
    },
    
    )

}

 const buscarTodas = async(req,res)=>{

    const empresa =await services.buscarTodas()
    res.status(200).send(empresa)
    
}

 const buscarPorCategoria = async(req,res)=>{

    const empresa = await services.buscarPorCategoria(req.params.categoria)
    
    res.status(200).send({msg:"Achou!", empresa})

}

export default {criarEmpresa, buscarPorCategoria, buscarTodas}