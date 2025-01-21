const form = document.getElementById('form')

//Crie funções separadas para cada coisa que você quiser fazer
//Cada funcionalidade pode ter uma função para te ajudar

form.addEventListener('submit', function(evento){
    evento.preventDefault()
    const inputPeso = document.getElementById('peso')
    const inputAltura = document.getElementById('altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    //Se o peso não for válido
    if(!peso){
        setResultado('Peso inválido', false)
        return
    }
    //Se a altura não for válida
    if(!altura){
        setResultado('Altura inválida', false)
        return
    }

    const imc = getImc(peso,altura)
    const nivelImc = getnivelImc(imc)

    const msg = `Seu IMC é ${imc} (${nivelImc})`

    setResultado(msg,true)
})

//Criando um paragráfo
function criaP(){
    const p = document.createElement('p')
    return p 
}

//Função para a resposta 
function setResultado(msg, isValid){
    const resultado = document.getElementById('resultado')
    resultado.innerHTML = ''

    const p = criaP()

    //Verificando se é válido
    if(isValid) {
        p.classList.add('p-resultado')
    }else {
        p.classList.add('bad')
    }


    p.innerHTML = msg
    resultado.appendChild(p)
     
}


//Criando a função para calcular o IMC
function getImc(peso,altura){
   const imc = peso / (altura * altura)
   return imc.toFixed(2)   
}


//Função com IF para determinar seu nível de peso 
//Usando array
function getnivelImc(imc){
    const nivel = ['Abaixo do peso','Peso normal',
        'Sobrepeso','Obesidade grau 1',
        'Obesidade grau 2','Obesidade grau 3']

    if(imc >= 39.9){
        return nivel[5]
    }else if (imc >= 34.9){
        return nivel[4]
    }else if (imc >= 29.9){
        return nivel[3]
    }else if (imc >= 24.9){
        return nivel[2]
    }else if(imc >= 18.5){
        return nivel[1]
    }else if( imc < 18.5){
        return nivel[0]
    }    

        
}


