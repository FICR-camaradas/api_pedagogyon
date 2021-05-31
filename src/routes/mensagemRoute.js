module.exports = function (app) {
    const mensagemController = require('../controllers/mensagemController.js')

    app.route('/mensagem')
        .get(mensagemController.listAll)
        .post(mensagemController.createOne)
}