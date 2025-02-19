//Funções Imediatas(IIFE)
//Funções que são invocadas imediatamentes
//Não tem nome e por isso não é tocada no escopo global

//Não tocar o escopo global
(function(){
    const name = 'Jhonatan'
    console.log(name)
    
    const sobrenome = 'Fagundes'
    function criaName(name){
        return name + sobrenome
    }

    function falaNome(){
        console.log(criaName('Jhonatan '))
    }

    falaNome()
    console.log(idade, peso , altura);

})(23, 87, 1.79);//Parametros aqui;