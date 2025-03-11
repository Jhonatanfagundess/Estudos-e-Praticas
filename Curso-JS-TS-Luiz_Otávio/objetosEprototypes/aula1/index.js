//Revisando objetos

//Maneira literal
const pessoa = {
    name:'Jhonatan',
    sobrenome:'Fagundes'
}
console.log(pessoa)

//Construtor
const pessoaNew = new Object()
pessoaNew.name = 'Raul'
pessoaNew.sobrenome = 'Silva'
pessoaNew.idade = 23
pessoaNew.falarNome = function(){
    return(`Seu nome é: ${this.name}`)
}
pessoaNew.getDataNascimento = function(){
    const data = new Date()
    return atual.getFullYear() - this.idade
}
//for(let chave in pessoaNew){
 //   console.log(chave[chave])
//}

//Lembre-se da factory functions e da constructor functions
//factory Functions
function criaPessoa(name,sobrenome){
    return{
        name,
        sobrenome,

        nomeCompleto(){
            return `${this.name} ${this.sobrenome}`
        }
    }
}
const people = criaPessoa('Gabs', 'Silva')
console.log(people.nomeCompleto())


//Constructor function
//New cria um objeto vazio
//this faz a atrelação ao objeto vazio
//Podemos alterar o valor apenas dentro da memória já salva, não onde a memória aponta
function Pessoa(name,sobrenome){
    this.name = name,
    this.sobrenome = sobrenome

    Object.freeze(this) // Com esse método travamos a alteração do objeto após a primeira aplicação
}
const alguem = new Pessoa('Ana', 'Silva')
const alguemTwo = new Pessoa('Maria', 'Pereira')
console.log(alguem)
alguem.name = 'Laura'
console.log(alguem)//A alteração do valor || Com o object.Freeze não altera