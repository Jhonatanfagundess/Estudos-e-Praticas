//Tratando e lançandos erros com (try,catch,throw)
//é como se fosse um if e else
//é melhor tratarmos o erro do que mostrar o erro completo
//Podemos lançar um erro e capturar

try{
    console.log(naoExiste)
}catch(err){
    console.log('Não existe essa VAR')
}

//Podemos tratar o próprio erro
function soma(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser números') //Lançando o erro aqui 
    }

    return x + y
}

//Se não ocorrer ao executar o bloco try o catch não é executado
try{
    console.log(soma(1,2))
    console.log(soma('2',2))
}catch(err){
    console.log('Deu alguma coisa errada aqui')
}

