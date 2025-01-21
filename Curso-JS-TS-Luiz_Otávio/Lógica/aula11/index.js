/*
 Mais diferenças entre var,let e const

* */

let name = 'Jhonatan' //Criando
var nameT = 'Pedro' //CRIANDO

//let name = 'Pedro' - Não posso reatribuir

//Let tem escopo de bloco de código {...}
//Var só tem escopo de função
const verdadeira = true

//Primeiro o JS vai procurar a declaração da variável dentro da função
//Se não achar vai para o escopo global

if(verdadeira){
    let nome = 'Otávio'
    //console.log(nome,nameT)

    if(verdadeira){
        let nome = 'Mudei'
        var nameT = 'Raul' // Redeclarada
        console.log(nome,nameT)
    }
}

//Fuction protege as variáveis que estão dentro dela
var sobreNome = 'Santos' // A fuction pode acessar o intorno

function falaOi(){
    var nome = 'Guilherme'
    console.log(nome)
    console.log(sobreNome)

    //Uma variável dentro de um bloco de fuction não pode ser acessada 
    //Ou declarada fora dele
    if(verdadeira){
        let name = 'Jhonatan'
        console.log(name) //Jeito Certo
    }
    console.log(name) // Vai dar como erro/Underfined

}

falaOi()

//Utilizando o var e se fizermos dessa forma o JS vai jogar a variável para o início
//fazendo o rosting da variável, jogando ela para o topo e assim sendo executada
console.log(ultimoNome)
var ultimoNome = 'Costa'

//O rosting não acontece com let
//Então se chamarmos a variável e depois declarar o programa da um erro
console.log(callMe) // Vai gerar um erro
let callMe = 'Me liga'