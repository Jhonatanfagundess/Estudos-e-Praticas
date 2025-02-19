//Funções de callBack
//Funções que são executadas após uma ação ser executada ou finalizada

//Uma função para gerar um valor alatório para sabermos de quanto tempo a fuction será executada
function rand(min = 1000, max = 3000){
    const num = Math.random() * (max - min) + min
    return Math.floor(num)
}

function f1(callback){
    setTimeout(function(){
        console.log('f1')
        if(callback)callback()
    },rand())
}
function f2(callback){
    setTimeout(function(){
     console.log('f2')
     if(callback)callback()
    },rand())
    
}
function f3(){
    setTimeout(function(){
        console.log('f3')
        if(callback)callback()
    },rand())
    
}

//Criamos a ordem de execução
//Dessa forma um se executa e depois o outro
f1(function(){
    f2(function(){
        f3(function(){
            console.log('Hello World')
        })
    })
})

//Não faça uma callback Hell
//Ou seja sem fazer uma arvóre de callbacks um dentro do outro
f1(f1callback())

function f1callback(){
    f2(f2callback())
}

function f2callback(){
    f3(f3callback())
}

function f3callback(){
    console.log('Hello World')
}