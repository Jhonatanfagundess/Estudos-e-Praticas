/*
Avaliação de Curto Circuito

&& - AND 
|| - OU -- Vai retornar o valor verdadeiro


Falsy - Avalia em false quando necessári0
NaN
0
Null/Underfined
'' - String vazia
*/

function hello(){
    return "Hello World"
}
const exe = 'Jhonatan'
console.log(exe  && hello()) //Como um não é Falsy a execução corre normal



const corUser = 'preto' // Caso o usuário não selecione uma cor
const corPadrao = corUser || 'red'
console.log(corPadrao)

const a = 0
const b = null
const c = 'false' // retorna aqui
const d = NaN
const e = undefined

console.log(a || b || c || d || e) // Temos uma váriavel com tipo de dado ali, fazendo retornar a mesma, não sendo valores falsy

