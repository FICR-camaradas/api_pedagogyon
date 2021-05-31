const Cliente = require('../models').Usuario
const bcrypt = require('bcrypt')

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

exports.createOne = (req, res) => { 
    const tipo = 1
    const {
      nome, email, imagem,
      cpf, rg, orgao_expedidor,
      data_nasc, sexo, endereco,
      cep, cidade, estado, telefone
    } = req.body

    bcrypt.hash(req.body.senha, 10, (err,hash)=>{
      if(err){return res.send({err})}
      let senha = hash
      Cliente.create({tipo,nome,email,senha,
        imagem,cpf,rg,orgao_expedidor,
        data_nasc,sexo,endereco,cep,cidade,
        estado,telefone})
        .then(cliente => {res.send(cliente)})
        .catch(error => {res.send(error)})
    })
}

exports.updateOne = (req,res) => {
    const {
      nome, email, imagem,
      cpf, rg, orgao_expedidor,
      data_nasc, sexo, endereco,
      cep, cidade, estado, telefone
    } = req.body
    Cliente.update({
      nome, email, imagem,
      cpf, rg, orgao_expedidor,
      data_nasc, sexo, endereco,
      cep, cidade, estado, telefone
    },{where:{id:req.params.id}})
	.then(cliente => {res.send(cliente)})
	.catch(error => {res.send(error)})
}

exports.deleteOne = (req,res) => {
	Cliente.destroy({where:{id:req.params.id}})
  .then(cliente => {res.send(cliente)})
	.catch(error => {res.send(error)})
}