//Misturando filter, map e reduce 

const numeros = [5,50,80,1,2,3,4,58,11,15,22,27]
const pares = numeros.filter((valor) => {
    return valor % 2 === 0
}).map((valor) => {
    //Perceba que estamos fazendo a mistura dos três aqui!
    return valor * 2
}).reduce((acum,valor) => {
    return acum + valor
})
console.log(pares)

//Primeiro eu utilizei o filter fazendo com que só pares voltassem!
//Depois eu utilizei o map e dobrei os valores
//E por último utilizei o reduce para reduzir o array e somar os valores