//Numbers em JS

//O padrão que o JS trabalha : IEEE-754-2008

let num = 1 
let nuumTwo = 2.5

//Podemos converter o número para string
console.log(num.toString() + nuumTwo)


//Podemos configurar as casas decimais nós queremos
console.log(nuumTwo.toFixed(4))


//Podemos saber se o valor daquela variável é inteiro ou flutuantes
console.log(Number.isInteger(nuumTwo))


//Podemos resolver uma situação de soma de números fluantes que não tem uma boa precisão

let sum = 0.7
let sumTwo = 0.1

sum += sumTwo // 0.8
sum += sumTwo // 0.9
sum += sumTwo // 1.0

console.log(parseFloat(sum.toFixed(2)))
//Aqui colocamos seu tipo como flutuante e também o número de casas decimais
