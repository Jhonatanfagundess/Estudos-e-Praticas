//Exercício básico

let varA = 'A'
let varB = 'B'
let varC = 'C'

console.log(varA , varB , varC)

const Save = varA
varA = varB
varB = varC
varC = Save
console.log(varA , varB , varC)