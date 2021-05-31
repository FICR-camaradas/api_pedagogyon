module.exports = function (app) {
    const profissionalController = require('../controllers/profissionalController')

    app.route('/profissional')
        .get(profissionalController.listAll)
        .post(profissionalController.createOne)
    
    app.route('/profissional/:id')
        .get(profissionalController.listOne)
        .put(profissionalController.updateOne)
        .delete(profissionalController.deleteOne)
}