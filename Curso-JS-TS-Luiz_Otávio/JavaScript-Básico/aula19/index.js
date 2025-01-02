//Funções
//Funções executam ações!

//Existem Funções que não retornam valores

function hello(name){
    return `Hello World, ${name}`
}
const safe = hello('Raul')
console.log(hello())

//Aquilo que está dentro do escopo da função não pode ser acessado
//Podemos determinar o valor do parametro casa não passemos um valor

function sum(a=1,b=1){
    return a + b
}
console.log(sum(5,5))


//Lembre-se que se colocar return na fuction nada que está depois vai funcionar
//Use Return apenas no final


//Uma função anonima, aquela que está em uma variavel
const raiz = function(x){
    return Math.sqrt(x)
};
console.log(raiz(10))

//Uma ArrowFuction
const dobro = (y) => {
    return y ** 2
}

//Crie várias funções para realizar vários tipos de ações
//Pois criar uma função muito grande com várias ações não é recomendado 