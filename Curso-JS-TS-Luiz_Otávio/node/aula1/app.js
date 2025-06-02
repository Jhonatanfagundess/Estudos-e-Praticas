//Para fazer a importação do node utilizamos o require, pois estamos requisitando
//Podemos fazer a requisição apenas de uma coisa do modulo
const mod11 = require('./mod1').falaNome//Importação apenas da função

//Podemos fazer uma desestruturação
//Fazendo dessa maneira podemos usar as chaves separados
const {name,sobrenome,falaNome} = require('./mod1')

const mod1 = require('./mod1')
console.log(mod1.falaNome())


//Classes

const {Pessoa} = require('./mod1')
const p1 = new Pessoa('Jhonatan')


//Lembrando que o node tem modulos nativos
const path = require(path)