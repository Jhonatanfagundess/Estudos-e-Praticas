//While e Do while
//Não sabemos quando vezes a execução precisa ser feita no while
//Diferente do For que temos a quantidade que precisamos executar

const name = 'Jhonatan'
let control = 0
while(control < name.length ){
    console.log(name[control])
    control ++ //Não esquecer de alterar a variável de controle
}



function random(min, max){
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}

const min = 1
const max = 50
let ra = random(min,max)

//Se achar o número 10 o laço para a execução
//Só executa se o laço for TRUE desde o início
while(ra !== 10){
    ra = random(min,max)
    console.log(ra)
}
console.log("######")

//Do while primeiro executa o código e depois verifica as condições
//Ele sempre exuta o código primeiro
do{
    ra = random(min,max)
    console.log(ra)
}while(ra !== 10)



