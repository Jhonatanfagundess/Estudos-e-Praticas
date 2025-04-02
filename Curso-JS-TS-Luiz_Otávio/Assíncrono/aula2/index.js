//Métodos úteis em promisses

//função que gera valor aleatório!
function rand(min,max){
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}

function aguardarAi(msg,time){
    return new Promise((resolve,reject) => {
        if(typeof msg !== "string") reject('ERRO!')

        setTimeout(() => {
            resolve(msg.toUpperCase())
        }, time)    
    })
}

//Métodos
//Promises.all - Promises.race - Promise.resolve - Promise.reject
const promises = [
    'primeiro valor', 
   aguardarAi('Promise 1', 3000), 
    aguardarAi('Promise 2', 500), 
    aguardarAi('Promise 3', 1000),
    'Outro valor'
]
Promise.all(promises)
.then( (value) => {
    console.log(value)
})
.catch(e => {
    console.log(e)
})


//A primeira que resolver você me devolve o valor!
//Promisse.race
Promise.race(promises)
.then( (value) => {
    console.log(value)
})
.catch(e => {
    console.log(e)
})


//Promise.resolve - Promise.reject
//Podemos retornar uma promise já resolvida !
function baixarPagina(){
    const emCache = true

    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return aguardarAi('Baixando a página', 3000)
    }
}

baixarPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => {
        console.log(e)
    })