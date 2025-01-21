/*
if, else if and else

*/


//Um sistema de horas 
//Entre 0 - 11 - Bom dia
//Entre 12 - 17 - Boa tarde
//Entre 18 - 23 - Boa Noite

const hora = 50

//If pode ser usado sozinho
//else if não pode ser executando sozinho, preciso de um if antes
//Só posso ter um else no corpo da estrutura

//Bloco de estrutura condicional
if(hora >= 0 && hora <= 11){
    console.log('Bom dia!')
}else if(hora >= 12 && hora <= 17){
    console.log('Boa tarde!')
}else if(hora >= 18 && hora <= 23){
    console.log('Boa noite')
}else{
    console.log('Olá!')
}