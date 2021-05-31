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
					.catch(error => {return res.status(500).send({mensagem:"Erro ao connsolidar contrato", error:error})})
				}else{return res.status(500).send({mensagem: "Erro ao connsolidar contrato"})}
			})
			.catch(error => {return res.status(500).send({mensagem:"Erro ao connsolidar contrato", error:error})})
		}
		else{return res.status(500).send({mensagem: "Erro ao connsolidar contrato"})}
	})
	.catch(error => {return res.status(500).send({mensagem:"Erro ao connsolidar contrato", error: error})})

}

exports.updateOne = (req, res) => { 
    /** Por motivos de segurança, os
	 * contratos não devem receber
	 * modificações após serem consolidados.
	 * É recomendável a criação de um novo 
	 * contrato */
}
exports.deleteOne = (req, res) => { 
    /** Por motivos de segurança, os
	 * contratos não devem ser deletados.
	 * todos os contratos devem ficar salvos
	 * para futuras análises. */
}