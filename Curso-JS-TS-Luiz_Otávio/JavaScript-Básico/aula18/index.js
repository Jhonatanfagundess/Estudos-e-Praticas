//Arrays
//Seria uma lista ou uma coleção de coisas 


//Vamos colocar como prática coloca apenas um tipo dentrp do array
//E também separar os tipos de dados
//Os Arrays são indexados por Indice
const alunos = ['Jhonatan' , 'Pedro' , 'Raul' , 'Wesley']

//podemos editar o valor algum indice 
alunos[0] = 'Japa'

//Podemos adicionar elementos também
alunos[3] = 'Luiza'
alunos.push('Guilherme') // Colocando elemento no final do array

//Colocando no Inicío do Array
alunos.unshift('Vitória')
alunos.unshift('Allex')

//Podemos remover da lista pelo fim
alunos.pop()

alunos.shift()//Remover do começo

//Lembre-se que adicionando ou removendo elementos seus indices são alterados

//Podemos remover um elemento mas podemos manter seu indice 
delete alunos[1]

//Arrays é um objeto indexado!
console.log(typeof alunos)

console.log(alunos)