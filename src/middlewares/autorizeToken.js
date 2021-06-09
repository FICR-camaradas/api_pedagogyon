const jwt = require('jsonwebtoken')
const {token} = require('../config/keyToken')

exports.autenticar = async (req,res,next) => {
    const authHeader = req.headers.authorization

    if(!authHeader){return res.status(400).send({message:"Token não definido"})}
    
    const [,resultToken] = authHeader.split(" ")

    try{
        const payload = await jwt.verify(resultToken, token.secret)
        return next()
    }catch (err){return res.status(400).send({message:"Token inválido!"})}

}