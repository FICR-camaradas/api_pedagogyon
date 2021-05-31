module.exports = function (app) {
    const clienteController = require('../controllers/clienteController')
    app.route('/cliente')
        .get(clienteController.listAll)
        .post(clienteController.createOne)
    
    app.route('/cliente/:id')
        .get(clienteController.listOne)
}