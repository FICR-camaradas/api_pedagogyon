const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
    Usuario.findAll()
      .then(usuarios => {res.send(usuarios)})
      .catch(error => {res.send(error)})
}

exports.updateImage = (req,res) => {
	const id = req.params.id
  Usuario.update({imagem:req.file.filename},{where:{id:id}})
  .then(usuario => {return res.status(200).send({
    message:'Imagem Atualizada com sucesso',
    result: usuario
  })})
    .catch(error => {return res.status(400).send({error:error})})
}