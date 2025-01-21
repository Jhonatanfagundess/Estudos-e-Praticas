/* 
Operadores Lógicos
&& - AND - E
|| - OR - OU
! - NOT - NÃO


AND - As duas expressões tem que ser verdadeira(Todas as expressões)

OR - Uma das expressões precisa ser True para seguirmos

NOT - Inverte uma expressão
*/

const expressaoAnd = true && true && true && true
const expressaoOr = true || false || false || false
const expressaoNot = !true //Invertendo o valor
console.log(expressaoAnd)
console.log(expressaoOr)
console.log(expressaoNot)


//Fazendo uma verificação com os operadores lógicos
const user = 'Jhonatan'
const passoword = '123456'

const login = user === 'Jhonatan' && passoword === '123455' // AND e Diferença Estrita
console.log(login) 