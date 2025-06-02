const express = require('express')
const route = express.Router() //Rota
const homeController = require('./src/controllers/homeController') //Importando
const contatoController = require('./src/controllers/contatoController') //Importando

//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)


module.exports = route