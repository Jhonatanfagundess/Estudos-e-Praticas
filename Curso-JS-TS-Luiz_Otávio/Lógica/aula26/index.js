//Set interval e setTimeout
//quando queremos trabalhar com intervalo de tempo - setInterval


function mostrarHora(){
    let data = new Date()

    return data.toLocaleTimeString('pt-BR' , {
        hour12:false
    })
}


function funcaoDeTeste(){
   console.log(mostrarHora())
}

//Colocamos uma ação e depois o tempo que ela vai ficar sendo executada
//É melhor fazer uma função anônima
setInterval(funcaoDeTeste, 1000)

const timer = setInterval(function(){
    console.log(mostrarHora())
}, 1000) //Dois segundos para executar agora



//SetTimeOut se executa só uma vez
setTimeout(function(){
    clearTimeout(timer)
}, 3000)

setTimeout(function(){
    console.log('Olá mundo')
}, 5000)