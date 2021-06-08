const clienteController = require('../controllers/clienteController')

module.exports = function (app) {
    app.route('/cliente')
        .get(clienteController.listAll)
        .post(clienteController.createOne)
    
    app.route('/cliente/:id')
        .get(clienteController.listOne)
        .put(clienteController.updateOne)
        .delete(clienteController.deleteOne)
}