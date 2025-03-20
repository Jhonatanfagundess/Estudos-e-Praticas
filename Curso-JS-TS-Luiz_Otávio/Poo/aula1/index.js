//Criando classes
//Funciona da mesma forma que a função construtora


class Pessoa {
    constructor(name,sobrename){
        this.name = name,
        this.sobrename = sobrename
    }

    //Métodos
    falar(){
        console.log('Falando')
    }

    comer(){
        console.log('Comendo')
    }
}
const p1 = new Pessoa("Jhonatan", 'Fagundes')

//Fazendo agora com a função construtora

function PessoaDois(name,sobrename){
    this.name = name,
    this.sobrename = sobrename
}
PessoaDois.prototype.falar = function(){
    console.log('Falando')
}