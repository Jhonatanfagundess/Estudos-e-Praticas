// Operadores Aritméticos
// + - / * - Básicos
//Lembre-se que o + faz a concatenação
// ** - Potência
// % - Resto da Divisão

const num1= 5
const num2 = 10
const concatenação = '0'
console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 ** num2)
console.log(num1 % num2)


console.log(num1 + num2 + concatenação)

//Temos que tomar cuidado com a ordem de precedência
//A ordem seria : ()   **   *   /   %   +    -


//aumetando o valor da variável - Sendo isso o valor do incremento
//Só podemos usar let porque a const não pode ser alterada 
let contador;
contador = 1
contador ++ 
contador ++ 
contador --
contador -- 
console.log(contador)

//Temos o pós e ante-incremento
console.log(contador++) // Vai aparecer o valor depois
console.log(--contador) // Tira o valor na hora

//Atalho de atribuição
contador += 50
console.log(contador)

//Em algum casos de concatenação pode ocorrer do JS tentar resolver a situação
const x = 10
const y = parseInt("5") // Podemos converter de string para número!
console.log(x + y) // Ou não