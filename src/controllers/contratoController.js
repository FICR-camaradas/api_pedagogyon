const Contrato = require('../models').Contrato
const Usuario = require('../models').Usuario
const Dependente = require('../models').Dependente

exports.listAll = (req, res) => {
    Contrato.findAll()
    .then(contratos => {res.send(contratos)})
    .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => { 
  Contrato.findAll({where:{id:req.params.id}})
  .then(contratos => {res.send(contratos)})
  .catch(error => {res.send(error)})
    
}

exports.createOne = (req, res) => { 
    const {valor_pago, descricao, avalicao,
		comentario, idUsuarioCliente,
		idDependente,idUsuarioProfissional
	} = req.body
	
	Usuario.findAll({where:{id:idUsuarioProfissional}})
	.then(usuario=>{
		let profTipo = usuario[0].tipo
		if(profTipo==2){
			Dependente.findAll({where:{id:idDependente}})
			.then(dependentes => {
				let cliente = dependentes[0].idUsuario
				if(cliente == idUsuarioCliente){
					Contrato.create({
						valor_pago, descricao, avalicao,
						comentario, idUsuarioCliente,
						idDependente, idUsuarioProfissional
					})
					.then(contrato => {return res.status(201).send(contrato)})
					.catch(error => {return res.status(401).send({mensagem:"Erro ao consolidar contrato 5", error:error})})
				}else{return res.status(401).send({mensagem: "Erro ao consolidar contrato 4"})}
			})
			.catch(error => {return res.status(401).send({mensagem:"Erro ao consolidar contrato 3", error:error})})
		}
		else{return res.status(401).send({mensagem: "Erro ao consolidar contrato 2"})}
	})
	.catch(error => {return res.send({mensagem:"Erro ao consolidar contrato 1", error: error})})

}

exports.updateOne = (req, res) => { 
    const {avalicao, comentario} = req.body
	Contrato.update({where:{id:req.params.id}})
	.then(contrato => { return res.send(contrato)})
	.catch(error => {return res.send(error)})
}
exports.deleteOne = (req, res) => { 
    /** Por motivos de segurança, os
	 * contratos não devem ser deletados.
	 * todos os contratos devem ficar salvos
	 * para futuras análises. */
}