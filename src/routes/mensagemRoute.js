module.exports = function (app) {
    const mensagemController = require('../controllers/mensagemController.js')

    app.route('/mensagem')
        .get(mensagemController.listAll)
        .post(mensagemController.createOne)

    app.route('/mensagem/:id')
        .get(mensagemController.listOne)
        .put(mensagemController.updateOne)
        .delete(mensagemController.deleteOne)
}