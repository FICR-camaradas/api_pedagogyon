const Dependente = require('../models').Dependente
const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
  Dependente.findAll()
    .then(dependente => {res.send(dependente)})
    .catch(error => {res.send(error)})
}

exports.listOne = (req, res) => { 
  Dependente.findAll({where:{id:req.params.id}})
  .then(dependente => {res.send(dependente)})
  .catch(error => {res.send(error)})
}

exports.createOne = (req, res) => { 
    const {nome, cpf, rg, orgao_expedidor,
      data_nasc, sexo, observacoes, idUsuario
    } = req.body
    Usuario.findAll({where:{id:idUsuario}})
      .then(usuario => {
        let tipo = usuario[0].tipo
        if(tipo==1){
          Dependente.create({nome, cpf, rg, orgao_expedidor,
            data_nasc, sexo, observacoes, idUsuario})
            .then(dependente => {res.send(dependente)})
            .catch(error => {res.send(error)})
        }
        if(tipo==2){return res.status(500).send({resp:"Não autorizado"})}
      })
      .catch(error => {res.send(error)})
    }

exports.updateOne = (req, res) => { 
    const {nome, cpf, rg, orgao_expedidor,
      data_nasc, sexo, observacoes
    } = req.body
    Dependente.update({
      nome, cpf, rg, orgao_expedidor,
      data_nasc, sexo, observacoes
    },{where:{id:req.params.id}})
    .then(dependente => {res.send(dependente)})
    .catch(error => {res.send(error)})
}
exports.deleteOne = (req, res) => { 
    Dependente.destroy({where:{id:req.params.id}})
    .then(dependente => {res.send({
      Message: "dependente excluido com sucesso", 
      User: dependente})})
    .catch(error => {res.send(error)})
}