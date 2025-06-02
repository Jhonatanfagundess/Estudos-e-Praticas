const multiplica = require('./mod') //Fazendo a exportação

console.log(multiplica(2,2))

//Podemos fazer importação até mesmo daquilo que já foi solicitado antes para ser uma importação
module.exports = multiplica //Requisição

//Sistema de navegação
//Nativo do NODE 
const path = require('path')