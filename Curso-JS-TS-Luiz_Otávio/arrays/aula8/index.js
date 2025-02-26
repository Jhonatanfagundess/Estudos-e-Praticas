//ForEach
//Só está disponível dentro de arrays
//Serve mais para fazermos a interação
//Ele recebe o valor, indice e array

const numeros = [5,50,80,1,2,3,4,58,11,15,22,27]
let total = 0
numeros.forEach((valor) => {
    total += valor
})
console.log(total)