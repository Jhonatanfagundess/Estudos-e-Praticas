//Como concatenar arrays

const numbers = [1,2,3]
const numbersTwo = [4,5,6]
const numbersThree = [7,8,9]

//Uma das maneiras de se fazer!
const conjuto = numbers.concat(numbersTwo)
console.log(conjuto)

//Podemos usar o spread|rest
const conjutoCompleto = [...numbers, ...numbersTwo, ...numbersThree]
console.log(conjutoCompleto)
