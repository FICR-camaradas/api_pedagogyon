const Profissional = require('../models').Usuario
const bcrypt = require('bcrypt')
const {uuid} = require('uuidv4')

exports.listAll = (req, res) => {
    Profissional.findAll({where:{tipo:2}})
      .then(profissional => {res.send(profissional)})
      .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => { 
    Profissional.findAll({where:{tipo:2,id:req.params.id}})
    .then(profissional => {res.send(profissional)})
    .catch(error => {res.send(error)})
}

exports.createOne = (req, res) => { 
    const tipo = 2
    const {
      nome, email, imagem,
      cpf, rg, orgao_expedidor,
      data_nasc, sexo, endereco,
      cep, cidade, estado, telefone,
      especializacao,observacoes
    } = req.body

    bcrypt.hash(req.body.senha, 10, (err,hash)=>{
      if(err){return res.send({err})}
      let senha = hash
      Profissional.create({
        uuid:uuid(),tipo,nome,email,senha,
        imagem,cpf,rg,orgao_expedidor,
        data_nasc,sexo,endereco,cep,cidade,
        estado,telefone,especializacao,observacoes})
        .then(profissional => {res.send(profissional)})
        .catch(error => {res.send(error)})
    })
}
exports.updateOne = (req,res) => {
  const {
    nome, email, imagem,
    cpf, rg, orgao_expedidor,
    data_nasc, sexo, endereco,
    cep, cidade, estado, telefone,
    especializacao,observacoes
  } = req.body
  Profissional.update({
    nome, email, imagem,
    cpf, rg, orgao_expedidor,
    data_nasc, sexo, endereco,
    cep, cidade, estado, telefone,
    especializacao,observacoes
  },{where:{id:req.params.id}})
.then(profissional => {res.send(profissional)})
.catch(error => {res.send(error)})
}

exports.deleteOne = (req,res) => {
Profissional.destroy({where:{id:req.params.id}})
.then(profissional => {res.send(profissional)})
.catch(error => {res.send(error)})
}