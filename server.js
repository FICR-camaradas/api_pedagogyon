const express = require('express')

const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const usuarioRoute = require('./src/routes/usuarioRoute')
const clienteRoute = require('./src/routes/clienteRoute')
const profissionalRoute = require('./src/routes/profissionalRoute')
const dependenteRoute = require('./src/routes/dependenteRoute')
const contratoRoute = require('./src/routes/contratoRoute')
const mensagemRoute = require('./src/routes/mensagemRoute')
const loginRoute = require('./src/routes/loginRoute')

usuarioRoute(app)
clienteRoute(app)
profissionalRoute(app)
dependenteRoute(app)
contratoRoute(app)
mensagemRoute(app)
loginRoute(app)

const port = process.env.PORT || 3000
app.listen(port)
console.log('funcionando na porta ', port)