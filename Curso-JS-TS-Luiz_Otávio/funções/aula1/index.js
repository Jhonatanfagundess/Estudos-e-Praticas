//Declaração de funções(function hosting)
//Só acontece o hosting quando se declara a função de maneira clássica
//Todas as funções clássicas são jogadas para cima do arquivo
function falaOi(){
    console.log('Hello World')
}

//First-class objects(Objetos de primeira classe)
//fuction expression]
//Podemos executar a variável como uma função dessa forma
const souUmDado = function(){
    console.log('Sou um dado')
}

//Recebendo uma fuction como parametro
//E fazemos ela ser executada
//Podemos tratar a função como um dado, lembre-se disso
function executaFuction(funcao){
    console.log("Executando a execução abaixo")
    funcao()
}
executaFuction(souUmDado)


//arrow fuction
const funcaoArrow = () => {
    console.log('Uma arrow Fuction aqui')
}

//Dentro de um objeto
const obj = {
    fala(){
        console.log('Falando aqui')
    }
}
obj.fala()
