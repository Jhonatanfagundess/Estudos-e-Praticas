//Módulos no Node

const name = 'Jhonatan'
const sobrenome ='Fagundes'

const falaNome = () => name + ' ' + sobrenome

//Primeira maneira de exportação
module.exports.name = name

//Fazendo a exportação
exports.name = name
exports.sobrenome = sobrenome
exports.falaNome = falaNome


//Podemos usar classe

class Pessoa{
    constructor(name){
        this.name = name
    }
}

exports.Pessoa = Pessoa

//Podemos fazer a importação dessa forma quando estamos tratando de várias const
//Podemos trocar os valores da mesma também
module.exports = {
    name,sobrenome,falaNome
}