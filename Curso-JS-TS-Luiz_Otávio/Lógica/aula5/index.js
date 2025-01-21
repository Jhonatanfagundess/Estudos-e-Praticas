/**
 If e else
 */

 const num = 10

/**
 * Quando o JS encontra uma condição TRUE ele para de executar as restantes e executa apenas aquela
 */

if(num >= 0 && num <= 5 ){
    return console.log('Está entre 0 e 5')
}else if(num >= 6 && num <=8){
    console.log('Está entre 6 e 9')
}else if(num >= 9 && num <=11){
    console.log('Está entre 9 e 11')
}else{
    console.log('Não está entre 0 e 11')
}