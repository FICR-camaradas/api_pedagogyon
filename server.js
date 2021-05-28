const express = require('express')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const usuarioRoute = require('./src/routes/usuarioRoute')
const dependenteRoute = require('./src/routes/dependenteRoute')
const contratoRoute = require('./src/routes/contratoRoute')
const mensagemRoute = require('./src/routes/mensagemRoute')

usuarioRoute(app)
dependenteRoute(app)
contratoRoute(app)
mensagemRoute(app)

const port = process.env.PORT || 3000
app.listen(port)
console.log('funcionando na porta ', port)