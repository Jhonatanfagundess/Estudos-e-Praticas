const h1 = document.querySelector('.container h1')
h1.innerHTML = ''

const data = new Date()

function getDiaSemana(hoje){
    let diaSemanaTexto;
    switch(hoje){
        case 0:
            diaSemanaTexto = 'Domingo'
            break
        case 1:
            diaSemanaTexto = 'Segunda-feira'
            break
        case 2:
            diaSemanaTexto = 'Terça-feira'
            break
        case 3:
            diaSemanaTexto = 'Quarta-feira'
            break
        case 4:
            diaSemanaTexto = 'Quinta-feira'   
            break 
        case 5:
            diaSemanaTexto = 'Sexta-feira'
            break
        case 6:
            diaSemanaTexto = 'Sábado'  
            break
        default:
            diaSemanaTexto = ''                      
    }
    return diaSemanaTexto;
}

function getMes(numberMes){
    let mes;
    switch(numberMes){
        case 0:
            mes = 'janeiro'
            break
        case 1:
            mes = 'Fevereiro'
            break
        case 2:
            mes = 'Março'
            break
        case 3:
            mes = 'Abril'
            break
        case 4:
            mes = 'maio'   
            break 
        case 5:
            mes = 'junho'
            break
        case 6:
            mes = 'julho'  
            break
        case 7:
            mes = 'agosto'  
            break  
        case 8:
            mes = 'setembro'  
            break
        case 9:
            mes = 'outubro'  
            break   
        case 10:
            mes = 'novembro'  
            break
        case 11:
            mes = 'dezembro'  
            break            
                    
        default:
            mes = ''                      
    }
    return mes;
}

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDiaSemana(diaSemana)
    const nomeMes = getMes(numeroMes)

    return `${nomeDia}, ${data.getDate()} de ${nomeMes} de ${data.getFullYear()} ` 
    + `${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`
}

h1.innerHTML = criaData(data)

//Outra forma de fazer
const dataOne = new Date()
const opcoes = {
    dateStyle:'full',
    timeStyle:'short'
}

h1.innerHTML = dataOne.toLocaleDateString('pt-BR' , opcoes)

