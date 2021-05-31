const Mensagem = require('../models').Mensagem
const Usuario = require('../models').Usuario
const {Op} = require('sequelize')

exports.listAll = (req, res) => {
    Mensagem.findAll()
    .then(mensagens => {return res.status(200).send(mensagens)})
    .catch(error => {return res.status(500).send(error)})
}

exports.listOne = (req, res) => { 
    Mensagem.findAll({where:{id:req.params.id}})
    .then(mensagens => {return res.status(200).send(mensagens)})
    .catch(error => {return res.status(500).send(error)})
}

exports.createOne = (req, res) => { 
    const {idUsuarioOrigem,idUsuarioDestino,mensagem} = req.body
  	Usuario.findAll({where:{[Op.or]:[{id:idUsuarioOrigem}, {id:idUsuarioDestino}]}})
	  .then(usuario => {
		if(usuario.length == 2){
			Mensagem.create({idUsuarioOrigem,idUsuarioDestino,mensagem})
			.then(mensagem => {return res.status(201).send(mensagem)})
	  }})
	  .catch(error => {return res.status(500).send(error)})
}

exports.updateOne = (req, res) => { 
    
}
exports.deleteOne = (req, res) => { 
    
}