/*
A atribuição via desestruturação por Objeto
* */

//Só muda o tipo de dados comparados com array
//Objeto dentro de outro
const pessoa = {
    name:'Jhonatan',
    sobreNome: 'Fagundes',
    idade : 22,
    endereco : {
        rua:'Av Brasil',
        numero : 11
    }
}
// console.log(pessoa.name) //Maneira simples
//Jogando em uma variavel para acesso
//Outra maneira
const nome = pessoa.name

//atribuição via desestruturação
//Podemos atribuir um valor padrão caso não tenha valor na variável
//Podemos criar um nome/variável para a informação do objeto
const {name: troca = '',sobreNome,} = pessoa //Troca tem a info do objeto name
console.log(troca,sobreNome)

//Pegando informações de um objeto dentro de outro
//Podemos criar um nome/variável para a informação do objeto
const {endereco : {rua: r , numero}} = pessoa
console.log(r,numero)

//Pegando o resto
const {name , ...resto} = pessoa
console.log(resto)