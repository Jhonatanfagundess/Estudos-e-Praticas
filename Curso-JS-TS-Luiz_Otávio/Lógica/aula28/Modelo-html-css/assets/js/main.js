const btn = document.querySelector('.btn-add-tarefa')
const inputTarefa = document.querySelector('.input-nova-tarefa')
const tarefas = document.querySelector('.tarefas')

//Vamos criar várias funções cada uma com um objetivo
//E não fazer tudo de uma vez
function criaLi(){
    const li = document.createElement('li')
    return li
}

//Pegando a tecla que foi pressioanda
inputTarefa.addEventListener('keypress',function(e){
    if(e.keyCode === 13){ // 13 é o código da tecla(Enter)
        if(!inputTarefa.value) return
        criaTarefa(inputTarefa.value)
    }
})

//Limpando o Input assim que você adicionar uma tarefa 
//a caixa fica vazia
function limpaInput(){
    inputTarefa.value = ''
    inputTarefa.focus()
}

//Criando o botão para apagar a tarefa
function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar') //Colocando class
    li.appendChild(botaoApagar)
}

//Criando a tarefa
function criaTarefa(textoInput){
    const li = criaLi()
    li.innerHTML = textoInput
    tarefas.appendChild(li) //Colocando dentro da UL

    limpaInput() //Chamando a função para limpar aqui 
    criaBotaoApagar(li) // Chamando função para criar btn apagar
    salvarTarefa()
}

//Salvando as tarefas
function salvarTarefa(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '')
        listaDeTarefas.push(tarefaTexto)
    }

    //Converter array para o Json
    const tarefasJson = JSON.stringify(listaDeTarefas)

    //Salva as tarefas no navegador
    //Uma mini base de dados 
    localStorage.setItem('tarefas', tarefasJson)
}


//Ler as tarefas e jogar elas na ul
function adicionarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas') //Pegando as tarefas salvas no navegador
    const listaDeTarefas = JSON.parse(tarefas)//Converter para array

    for(let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
adicionarTarefasSalvas()//Chamando Função


//Capturando evento do botão
btn.addEventListener('click', function(event){
    if(!inputTarefa.value) return
    criaTarefa(inputTarefa.value)
})


//Pegando qual elemento foi feito o click
//Assim podemos checar e fazer a solicitação do botão apagar
document.addEventListener('click', function(e){
    const el = e.target //Vendo houve o click

    if(el.classList.contains('apagar')){
        el.parentElement.remove() //Do meu elemento, seu pai será removido
        salvarTarefa() // Apagando elemento do localStrorage
    }
})





