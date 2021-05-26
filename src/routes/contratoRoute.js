module.exports = function (app) {
    const contratoController = require('../controllers/contratoController')

    app.route('/contrato')
        .get(contratoController.listAll)
        .post(contratoController.createOne)

    app.route('/contrato/:id')
        .get(contratoController.listOne)
        .put(contratoController.updateOne)
        .delete(contratoController.deleteOne)
}