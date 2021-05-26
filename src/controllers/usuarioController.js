exports.listAll = (req, res) => {
    let response = {
        message: 'Usuário criado com sucesso'
      }
      res.send(response) 
}

exports.listOne = (req, res) => { 
    let response = {
        message: 'Usuário criado com sucesso',
        data: req.body,
        id:req.params.id
      }
      res.send(response)
    
}

exports.createOne = (req, res) => { 
    let response = {
        message: 'Usuário criado com sucesso',
        data: req.body
      }
      res.send(response)
}

exports.updateOne = (req, res) => { 
    let response = {
        message: 'Usuário criado com sucesso',
        data: req.body,
        id:req.params.id
      }
      res.send(response)
}
exports.deleteOne = (req, res) => { 
    let response = {
        message: 'Usuário criado com sucesso',
        data: req.body,
        id:req.params.id
      }
      res.send(response)
}