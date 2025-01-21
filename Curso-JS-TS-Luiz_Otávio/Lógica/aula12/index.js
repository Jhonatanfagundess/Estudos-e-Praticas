/**
 * Atribuição via desestruturação - Arrays
 */

let a = 'A'
let b = 'B'
let c = 'C'

//O que está do lado esquerdo é a desestruturação
const letras = [b,c,a]
//[a,b,c] = letras

//Podemos arrancar coisas do Arrays e jogar em uma variável
//Lembre-se que o indíce começa no 0
const numbers = [1,2,3,4,5,6,7,8,9 ]
const [um,dois,tres,...resto] = numbers //Podemos pegar o resto 
// [um,'',tres,'',cinco,'',sete] // Para pergarmos pulando
//O resto é salvo em uma variável com nome
console.log(um,dois,tres)
console.log(resto)
//Quando pegamos o resto o operador se chama
//...Rest
//Quando queremos espalhar ou distrubuir
//Spread

//Temos o indice da lista e também o indice daquilo dentro da lsita
const listas = [[1,2,3], [4,5,6], [7,8,9]]
console.log(listas[1][2])//Acessando a segunda lista e segundo indice

//A desestruturação nada mais seria do que pegarmos valores em arrays 
//E tirar toda aquela estrutura do array
//Assim tendo acesso a ela de uma forma mais fácil