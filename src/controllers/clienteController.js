const Cliente = require('../models').Usuario
const bcrypt = require('bcrypt')
const {uuid} = require('uuidv4')
const multer = require('multer')

exports.listAll = (req, res) => {
    Cliente.findAll({where:{tipo:1}})
      .then(cliente => {res.send(cliente)})
      .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => { 
    Cliente.findAll({where:{tipo:1,id:req.params.id}})
    .then(cliente => {res.send(cliente)})
    .catch(error => {res.send(error)})
}

exports.createOne = async (req, res) => { 
    if(await Cliente.findOne({where:{email:req.body.email}})){
        return res.status(401).send({mensagem: "Não autorizado"})
    }
    
    
    const tipo = 1
    const {
      nome, email,
      cpf, rg, orgao_expedidor,
      data_nasc, sexo, endereco,
      cep, cidade, estado, telefone
    } = req.body

    bcrypt.hash(req.body.senha, 10, (err,hash)=>{
      if(err){return res.send({err})}
      let senha = hash
      Cliente.create({ uuid:uuid(), tipo, nome, 
        email, senha, cpf, rg, orgao_expedidor,
        data_nasc, sexo, endereco, cep, cidade,
        estado, telefone})
        .then(cliente => {
          res.send(cliente)
        })
        .catch(error => {res.send(error)})
    })
}

exports.updateOne = (req,res) => {
    const {
      nome, email, cpf, rg, orgao_expedidor,
      data_nasc, sexo, endereco,
      cep, cidade, estado, telefone
    } = req.body
    Cliente.update({
      nome, email, cpf, rg, orgao_expedidor,
      data_nasc, sexo, endereco,
      cep, cidade, estado, telefone
    },{where:{id:req.params.id}})
	.then(cliente => {res.send(cliente)})
	.catch(error => {res.send(error)})
}

exports.getNameImage = (req,res) => {

}

exports.deleteOne = (req,res) => {
	Cliente.destroy({where:{id:req.params.id}})
  .then(cliente => {res.send(cliente)})
	.catch(error => {res.send(error)})
}