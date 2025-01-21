//estrutura de repetição - For of
//Expecíficos para objetos não iteráveis
//Aqui pegamos o valor do indice
//retorna o valor em sí(iteraveis, arrays ou strings)

const name = ['Jhonatan Fagundes' ,'Pedro' ,'Raul']

/*for(let i = 0; i < name.length; i++){
    console.log(name[i])
}*/

/*for(let i in name){
    console.log(name[i])
}8*/

for(let valor of name){
    console.log(valor)
}
console.log('#######')

name.forEach(function(valor,indice , array){
    console.log(valor , indice , array)
});