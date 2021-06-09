const Usuario = require('../models').Usuario
const jwt = require('jsonwebtoken')
const {token} = require('../config/keyToken')
const bcrypt = require('bcrypt')

exports.autenticar = async (req,res) => {
    const {email, senha} = req.body

    const usuario = await Usuario.findOne({where:{email:email}})

    const validaSenha = await bcrypt.compare(senha, usuario.senha)

    if(validaSenha){
        const payload = {
            id: usuario.id,
            uuid: usuario.uuid,
            tipo: usuario.tipo,
            email: usuario.email
          }
          jwt.sign(payload, token.secret, (err, token) => {
            if (err) {res.sendStatus(400)}
            if (usuario.tipo == 1){
                res.status(200).send({
                    Cliente:{
                        id: usuario.id,
                        uuid: usuario.uuid,
                        email: usuario.email
                    },
                    token: token
                })}
            if (usuario.tipo == 2){res.status(200).send({
                Profissional:{
                    id: usuario.id,
                    uuid: usuario.uuid,
                    email: usuario.email,
                    especializacao: usuario.especializacao
                },
                token: token
            })}
          })
    }else{res.status(401).send({message:"Email ou Senha Inválido"})}

}