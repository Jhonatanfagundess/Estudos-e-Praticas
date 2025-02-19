//Closures
//Ela tem acesso a 3 escopos - global, dentro dela e mais dentro dela
//Closure - está fechando um escopo 

//closure - Pode ser alterado de fuction para function
//É a habilidade que tem para acessar seu escopo léxico

function criaFuction(){
    const name = 'Jhonatan'
    return function(){
        return name
    }
}
const funcao = criaFuction() // Recebendo uma fuction









