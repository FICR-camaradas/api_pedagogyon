const getImage = require('../middlewares/getImage')
const multer = require('multer')

module.exports = function (app) {
    const profissionalController = require('../controllers/profissionalController')
    const auth = require('../middlewares/autorizeToken')

    app.route('/profissional')
        .get(auth.autenticar,profissionalController.listAll)
        .post(profissionalController.createOne)
    
    app.route('/profissional/:id')
        .get(profissionalController.listOne)
        .put(profissionalController.updateOne)
        .delete(profissionalController.deleteOne)
}