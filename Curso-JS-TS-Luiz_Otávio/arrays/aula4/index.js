//filter
//filtar um valor dentro de um array

//retornar valores maiotres que 10
const numeros = [5,50,80,1,2,3,4,58,11,15,22,27]

//Sempre que usamos o filter esses parametros já vem!
//temos que retornar um valor boolean
function callbackFilter(valor){
    return valor > 10
    //O ideal é não termos condições que retornem true ou false
    //E sim já fazer o retorno do valor!
    //Pois com a condição já vamos saber se é true ou false
}

//Podemos fazer uma arrowFuction aqui
const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10
})
//const numerosFiltrados = numeros.filter(callbackFilter)
console.log(numerosFiltrados)



//Retornar as pessoas que tem o nome com 5 letras ou mais
//Retornar pessoas com idade 50 anos
//Retornar as pessoas cujo o nome termina com a
const pessoas = [
    {name:'Luiz', idade:62},
    {name:'Pedro', idade:25},
    {name:'Vitória', idade:32},
    {name:'Raul', idade:47},
    {name:'Milena', idade:19},
    {name:'Jéssica', idade:50}
]

const pessoasNomeGrande = pessoas.filter((valor) => {
    return valor.name.length >= 5
})
console.log(pessoasNomeGrande)


const pessoasComIdade = pessoas.filter((valor) => {
    return valor.idade > 50
})
console.log(pessoasComIdade)

//Um novo método aqui ATENÇÃO
//ENDSWITH seria o (términa com )
const pessoasQueTerminaComA = pessoas.filter((valor) => {
    return valor.name.toLowerCase().endsWith('a')
})
console.log(pessoasQueTerminaComA)