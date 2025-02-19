//Return de funções
//Retorna um  valor
//Termina a função

//Temos função que retornam e não retornam valores
//Como um modificação de style, não retorna valor
function criaPessoa(name,sobrenome){
    return {name:name , sobrenome:sobrenome}
}
const people = criaPessoa('Jhonatan','Fagundes')
//console.log(people)

function talkFrase(comeco){
    function talkRest(resto){
        return comeco + ' ' + resto
    }

    return talkRest
}

//Ola Mundo virou uma função
const olaMundo = talkFrase('Olá')
//console.log(olaMundo('Mundo'))


//Usando o mesmo conceito de uma fuction dentro de outra
function multiplica(multiplicador){
   //multiplicador
   function multiplicacao(n){
     return n * multiplicador
   }

   return multiplicacao
}

//Chamamos isso de fuction close
//Aquela que está fechando o escopo 

const duplica = multiplica(2) // O primeiro valor
console.log(duplica(2))//Aqui vai estar o valor do multiplica e colocamos agora o valor do multiplicador 

const triplica = multiplica(3)
console.log(triplica(2))