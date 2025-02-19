//Parametros de uma function
//Estou enviando um argumento que seria um valor
//Em uma fuction usando a VAR arguments retornamos os valores do parametros
function funcao(){
    let total = 0
    for(argumentos of arguments){
        total += argumentos
        }
  
        console.log(total) 
}
funcao(1,2,3,4,5,6,7,8,9)


//Se a função não receber todos os parametros ele dá como underfined. o restante dos valores
//Se quisermos manter o valor padrão de um parametro com vários argumentos nos declaramos ele como Underfined
function teste(a,b,c,d,e,f){
    console.log(a,c,b,e,d,f)
}
teste(1,2,3)


function desestruturacao({name,sobrenome,age}){
    console.log(name,sobrenome, age)
}
desestruturacao({name:'Jhonatan',sobrenome:"Fagundes",age:23})

//Usamos o rest - Resto
//Rest tem que ser o último sempre 
const conta = (operador, acumulador, ...numeros) => {
    for(let numero of numeros){
       if(operador === '+') acumulador += numero
       if(operador === '-') acumulador -= numero
       if(operador === '*') acumulador *= numero
       if(operador === '/') acumulador /= numero
        
    }
    console.log(operador, acumulador, numeros)
}
conta('+', 0 , 10,20,30,40)

//Quando precisamos receber vários parametros e não sabemos quantos são usar o rest