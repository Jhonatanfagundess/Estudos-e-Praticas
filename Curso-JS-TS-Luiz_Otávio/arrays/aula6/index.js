//Reduce 
//Reduzir um array para um único elemento|único valor
//O reduce começa sempre com o acumulador,valor,indice e array

//Some todos os números(reduce)
//Retorne um array com os partes(filter)
//Retorne um array com o dobro dos valores(map)
const numeros = [5,50,80,1,2,3,4,58,11,15,22,27]
const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor
    return acumulador
},0) //Valor inicial do acumulador)
console.log(total)


//Retornando os pares
const pares = numeros.reduce((acumulador,valor) => {
    if(valor % 2 === 0) acumulador.push(valor)
        return acumulador
},[])
console.log(pares)


//Retornar o dobro do valor
const dobroValor = numeros.reduce((acumulador,valor) => {
  acumulador.push(valor * 2)
  return acumulador
},[])
console.log(dobroValor)




//Retorne a pessoa mais velha
const pessoas = [
    {name:'Luiz', idade:62},
    {name:'Pedro', idade:25},
    {name:'Vitória', idade:32},
    {name:'Raul', idade:47},
    {name:'Milena', idade:70},
    {name:'Jéssica', idade:50}
]

//Aqui estamos vendo duas propriedades do objeto
const pessoaVelha = pessoas.reduce((acumulador,valor) => {
    if(acumulador.idade > valor.idade) return acumulador
    return valor
})
console.log(pessoaVelha)

