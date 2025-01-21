/*
Operador Ternario

? :

Pode encurtar seu código substituindo if e else
* */

const pontuacao = 999

if(pontuacao >= 1000){
    console.log('Vip')
}else{
    console.log("Normal")
}

//Encurtando o código
//Primeiro a codição - O valor verdadeiro - Valor para falso
//Condição ? "Valor True" : "Valor False"
const nivelUs = pontuacao >= 1000 ? 'Usuário Vip' : 'Usuário Normal'

const corUs = null
const corPadrao = corUs || 'Preto'