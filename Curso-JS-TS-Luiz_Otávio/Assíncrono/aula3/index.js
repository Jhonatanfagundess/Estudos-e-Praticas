//async e await

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
/* aguardarAi('Fase 1', rand(1,5))
    .then(valor => {
        console.log(valor)
        return aguardarAi('fase 2', rand(1,5))
    }).then(fase => {
        console.log(fase)
        return aguardarAi('fase 3', rand(1,5))
    }).then(fase => {
        console.log(fase)
    }).then(fase => {
        console.log('Terminando fase')
    }).catch(e => {
        console.log(e)
    })
 */


//Permitem que usemos promises dentro das funções
//só posso chamar o await utilizando a palavra reservada async na function
//Temos que utilizar o await faland que aquela tarefa precisa ser executada para continuar!
async function executa() {
   const fase1 = await aguardarAi('Fase 1', rand(1,5))
   console.log(fase1)

   const fase2 = await aguardarAi('Fase 2', rand(1,5))
   console.log(fase2)

   const fase3 = await aguardarAi('Fase 3', rand(1,5))
   console.log(fase3)


   console.log('Terminamos!')
}
executa()

//A promise tem três estados
//Pendente - Pendente(Ainda não foi resolvida)
//Fullfilled - Resolvida
//Rejectd - Rejeitada