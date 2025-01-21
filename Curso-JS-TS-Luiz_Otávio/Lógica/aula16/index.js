//estrutura de repetição -  For In
//Vetor é um array de uma única dimensão
//For in lê os indices ou chaves do objeto
//retorna o indice ou chave(string , array ou objetos)

const frutas= ['pera' , 'maça', 'Uva']
const pessoa = {
    name:'Jhonatan',
    idade:22,
    sobrenome:'Fagundes'
}

//Contador
for(let i = 0; i < frutas.length; i++){
    console.log(frutas[i])
}

//Lendo os indices
for(let indice in frutas){
    console.log(frutas[indice])
}

//Acessando objetos
for(let keys in pessoa){
    console.log(pessoa[keys])
}

for(let keys in pessoa){
    console.log(keys, pessoa[keys])
}


//Outra maneira de acessar o valor 
console.log(pessoa['name'])