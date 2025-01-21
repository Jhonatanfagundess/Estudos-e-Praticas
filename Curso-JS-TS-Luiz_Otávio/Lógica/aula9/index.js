//Estrutura condição Switch

const data = new Date()
const diaSemana = data.getDay() // Pegando o dia da semana


//Checando vários valores de uma variável
//Caso perfeto para um Switch
/*let diaSemanaTexto;
if(diaSemana === 0){
    diaSemanaTexto = 'Domingo'
}else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda'
}else if (diaSemana === 2){
    diaSemanaTexto = 'Terça'
}else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta'
}else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta'
}else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta'
}else if(diaSemana === 6){
    diaSemanaTexto = 'Sabádo'
}else{
    diaSemanaTexto = ''
}*/


let diaSemanaTexto; // Parou de existir porque está no escopo da função
//Temos que quebrar sempre sua ação!
//Se não a execução vai continuar
switch(diaSemana){
 case 0 :
    diaSemanaTexto = 'Domingo'   
    break
 case 1 :
    diaSemanaTexto = 'Segunda'   
    break
 case 2 :
    diaSemanaTexto = 'Terça'   
    break
 case 3 :
    diaSemanaTexto = 'Quarta'   
    break
 case 4 :
    diaSemanaTexto = 'Quinta'   
    break
 case 5 :
    diaSemanaTexto = 'Sexta'   
    break     
  case 6 :
    diaSemanaTexto = 'Sábado'   
    break      
  default:
    diaSemanaTexto = ''  
    break      
}

console.log(diaSemana, diaSemanaTexto)

//Quando estivermos que checar várias vezes uma variável o switch se encaixa
//Podemos colocar um swtich dentro de uma função

function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;
    switch(diaSemana){
        case 0 :
           diaSemanaTexto = 'Domingo'   
           break
        case 1 :
           diaSemanaTexto = 'Segunda'   
           break
        case 2 :
           diaSemanaTexto = 'Terça'   
           break
        case 3 :
           diaSemanaTexto = 'Quarta'   
           break
        case 4 :
           diaSemanaTexto = 'Quinta'   
           break
        case 5 :
           diaSemanaTexto = 'Sexta'   
           break     
         case 6 :
           diaSemanaTexto = 'Sábado'   
           break      
         default:
           diaSemanaTexto = ''  
           break      
       }
}