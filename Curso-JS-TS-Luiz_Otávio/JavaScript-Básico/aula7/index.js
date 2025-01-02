//Const? Uma variavel que não muda seu valor
//Não podemos criar uma variável com uma palavra reservada pelo JS
//Lembrar de utiliazr o camelCase(começar uma variável com letra minúscula e uma maiúscula  no meu da pavalvra)
//!!UTILIZAR LET E NÃO UTILIZAR CONST!!


//Const precisa sempre de um valor pois ela já é inicializada
//Seu valor não é alterado
const name = 'Pedro Raul'

const numOne = 5
const numTwo = 10
const result = numOne * numTwo
console.log(result)

const resultDuplo = result * 2 
console.log(resultDuplo)


const ressultTriplo = resultDuplo * 3
console.log(ressultTriplo)


//Podemos verificar o tipo da variável!
console.log(typeof(numOne))

//Cuidar ao mexer com os valores da const, podemos perder o valor origial ou que vai utilizar pois está mudando seu valor no código que está sendo feito


//Evoluir o valor é melhor que modificar o seu valor original