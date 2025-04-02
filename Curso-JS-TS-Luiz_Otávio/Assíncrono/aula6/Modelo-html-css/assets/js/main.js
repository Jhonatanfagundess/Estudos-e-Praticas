//Retornando uma promise e colocando onde vai procurar os valores

//Para comentar ctrl + k e ctrl + c

// fetch('pessoas.json')
//     .then(resposta => resposta.json())
//     .then(json => carregaElementoPagina(json))


//Utilizando Axios
//Get - pega informações
axios('pessoas.json')
    .then(resposta => carregaElementoPagina(resposta.data))
    

    //Função separada
function carregaElementoPagina(json){
    //Criando uma tabela para exibir
    const table = document.createElement('table')

    //Retornando o valor das chaves com for
    for(let pessoa of json){
        const tr = document.createElement('tr')//Título

        let td1 = document.createElement('td')//Linha
        td1.innerHTML = pessoa.nome
        tr.appendChild(td1) //Elemento filho adicionado  dentro

        let td2 = document.createElement('td')//Linha
        td2.innerHTML = pessoa.idade
        tr.appendChild(td2)

        let td3 = document.createElement('td')//Linha
        td3.innerHTML = pessoa.salario
        tr.appendChild(td3)

        table.appendChild(tr)//Elemento filho adicionado  dentro
    }

    const resultado = document.querySelector('.resultado')//Não esquecer do ponto
    resultado.append(table)

}


