// Estrutura de repetição FOR

//Dentro dos parametros são: uma var , uma condição , incrementar
//i- index
//Inicialização, uma condição para verificar , incrementar
for(let i = 1; i<= 10; i ++){
    const par = i % 2 === 0 ? 'Par' : 'Impar'
    console.log(i, par)
}

//Percorrer um array com for
//Estamos percorrendo o array elemento por elemento
const frutas = ['maça','pêra','uva' ]
for(let i = 0; i < frutas.length; i++){
    console.log(`Índice ${i}`, frutas[i])
}