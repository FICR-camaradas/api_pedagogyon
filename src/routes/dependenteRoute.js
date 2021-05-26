module.exports = function (app) {
    const dependenteController = require('../controllers/dependenteController')

    app.route('/dependente')
        .get(dependenteController.listAll)
        .post(dependenteController.createOne)

    app.route('/dependente/:id')
        .get(dependenteController.listOne)
        .put(dependenteController.updateOne)
        .delete(dependenteController.deleteOne)
}