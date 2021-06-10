const multer = require('multer')
const getImage = require('../middlewares/getImage')

module.exports = function (app) {
    const usuarioController = require('../controllers/usuarioController')

    app.route('/usuario')
        .get(usuarioController.listAll)
    
    app.route('/imagem/:id')
    .put(multer(getImage).single('imagemPerfil'), usuarioController.updateImage)

}