const express = require('express')
const route = express.Router() //Rota
const homeController = require('./controllers/homeController') //Importando
const contatoController = require('./controllers/contatoController') //Importando

//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)

//Rotas de contatos
route.get('/contato', contatoController)

module.exports = route