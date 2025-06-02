const express = require('express') //Trabalhando com servidor web
const route = express.Router() //Rota
const homeController = require('./src/controllers/homeController') //Importando
const contatoController = require('./src/controllers/contatoController') //Importando

//Rotas da home
route.get('/', homeController.paginaInicial)
route.post('/', homeController.trataPost)


module.exports = route