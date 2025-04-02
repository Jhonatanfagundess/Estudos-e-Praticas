//Promisses
function rand(min, max){
    min *= 1000
    max *= 100
    return Math.floor(Math.random() * (max-min) + min)
}

//As promisses vão receber um valor de resolve e reject. como se fosse um se a questão foi resolvida normalmente, ou um reject quando não se foi resolvido!!
//básicamente pensando até aqui seria uma tratativa de erro

//Trabalhamos com promisses quando vamos trabalhar de maneira assicrona
//Quando nós não sabemos quando vai acabar 
function esperaAi(msg, time){
    //Aqui lembramos muito to try e cacth, pois estamos lidando com trativas de erros!
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject('Bad value!')
        setTimeout(() => {
                resolve(msg)
            }, time)
    })
}


//Aqui lembramos muito to try e cacth, pois estamos lidando com trativas de erros!
esperaAi('Frase 1', rand(1,3))
    .then(resposta => {
        console.log(resposta)
        return esperaAi(123, rand(1,3)) //Erro está aqui
        .then(resposta => {
            console.log(resposta)
            return esperaAi('frase 3', rand(1,3))
            .then(resposta => {
                console.log(resposta)
            }).then(() => {
                console.log('O último a ser exibido!')
            })
        })
    }).catch(e => {
        console.log('ERRO!! Verificar')
    })

