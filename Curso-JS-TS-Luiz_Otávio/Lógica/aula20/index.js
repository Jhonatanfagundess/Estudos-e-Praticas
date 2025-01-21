//Break e Continue
//Funcionam em todos os laços 

//Break pode ser para sair de um bloco de código
//Depois de verificar a condição

const num = [1,2,3,4,5,6,7,8,9]

//Alterando para for in ou apenas for clássicos temos que atualziar a
//Variavel de controle por exempolo i++
for(let i of num){

    if(i === 2){
        console.log('Pulei o 2')
        continue // Para o laço continuar porém pulando para a próxima iteração do laço
    }

    if(i === 7){
        console.log('Saindo do laço!')
        break // Quebrando o laço aqui!
    }

    console.log(i)
}

//Fazendo com while
//Aqui temos que atualizar a variável de controle N
let n = 0
while(n < num.length){
    let i = num[i]

    if(i === 2){
        console.log('Pulei o 2')
        n++ ; //Atualizando aqui 
        continue // Para o laço continuar porém pulando para a próxima iteração do laço
    }

    if(i === 7){
        console.log('Saindo do laço!')
        n++ // atualizando aqui
        break // Quebrando o laço aqui!
    }

    console.log(i)
    n++
}

//Se no while ele achar um continue sem a atualização da variável de controle
//O laço vai continuar infinitamente
