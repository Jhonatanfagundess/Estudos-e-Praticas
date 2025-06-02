const express = require('express') //Trabalhando com servidor web
const route = express.Router() //Rota
const homeController = require('./src/controllers/homeController') //Importando
const contatoController = require('./src/controllers/contatoController') //Importando
const meuMiddleware = require('./src/middlewares/middle')//Importando o middleware 

//Exemplo
/*function meuMidleware(req,res,next){
    console.log('Passando no Middleware')
    next() //Para a ação seguir após ter feito a execução da function 
    //O next faz chamar a próxima função
}*/

//Rotas da home
//O next tem que ser chamado para seguir as outras ações
route.get('/', meuMiddleware, homeController.paginaInicial)
route.post('/', homeController.trataPost)


module.exports = route