const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0
let timer 



iniciar.addEventListener('click', function(ev){
    relogio.classList.remove('pausado') //Removendo a cor da pausa
    clearInterval(timer)
    iniciaRelogio()
})

pausar.addEventListener('click', function(ev){
    clearInterval(timer)
    relogio.classList.add('pausado') // Colocando a cor
})

zerar.addEventListener('click', function(ev){
    clearInterval(timer)
    relogio.innerHTML = '00:00:00'
    segundos = 0
})


//Pegando o date 
function getTimeSeconds(segundos){
    const data = new Date(segundos * 1000) //Recebe em milisegundos e nós modificamos
    return data.toLocaleTimeString('pt-BR',{
        hour12:false,
        timeZone:'UTC'
    })
}

//Iniciando a contagem
function iniciaRelogio(){
    timer = setInterval(function(){
        segundos++ ;
        relogio.innerHTML = getTimeSeconds(segundos)
    },1000)    
}