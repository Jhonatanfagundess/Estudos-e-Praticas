//Operadores de comparação
/* 
> maior
>= maior ou igual
< menor
<= menor ou igual
== igualdade(Valor)
=== igualdade estrita(Valor e tipo)
!= diferente(valor)
!== diferente estrita(valor e tipo)
*/
console.log(10>5)//True or false
const comp = 10 > 5 //Utilizando váriaveis
console.log(comp)

const menor = 10 < 5 //Boolean
console.log(menor)

const num1 = 25
const num2 = 10
const test = num1 == num2 // Não utilizar pois faz uma comparação mesmo com tipos diferentes, fazendo a conversão da váriavel 
const correct = num1 === num2 // Forma correta 
console.log(correct)
