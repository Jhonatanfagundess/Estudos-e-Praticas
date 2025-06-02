//Podemos fazer a exportação de tudo que podemos escrever no JS
//Como classes, fuctions, arrays

module.exports = function(x,y){
    return x * y
}

//Trabalhando com classes
module.exports = class Dog{
    constructor(name){
        this.name = name
    }

    latir(){
        console.log(`${this.name} está latindo!`)
    }
}