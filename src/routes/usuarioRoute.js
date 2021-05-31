module.exports = function (app) {
    const usuarioController = require('../controllers/usuarioController')

    app.route('/usuario')
        .get(usuarioController.listAll)

}