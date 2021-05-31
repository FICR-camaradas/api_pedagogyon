const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
    Usuario.findAll()
      .then(usuarios => {res.send(usuarios)})
      .catch(error => {res.send(error)})
}
