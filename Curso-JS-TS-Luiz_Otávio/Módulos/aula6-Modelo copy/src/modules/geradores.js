//Função para gerar um número aleatório 
const rand = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min)
}

//ASCII - lembrar da tabela
//Esse números são as letras dentro dessa tabela de busca
//Lembrando que tem um valor acima pois o Js só vai até um anterior
const geraMaiuscula = () => String.fromCharCode(rand(65,91))
const geraMinisculas = () => String.fromCharCode(rand(97, 123))
const geraNumero = () => String.fromCharCode(rand(48,58))
const simbolos = ',.;<>:/?@!@#$%¨&*()_+=-{}[]'
const geraSimbolo = () =>  simbolos[rand(0,simbolos.length)]


export default function geraSenha(qtd,maiusculas,minusculas,numeros,simbolos){
    const senhaArray = []
    qtd = Number(qtd)
    
    for(let i = 0; i < qtd ; i++){
        maiusculas && senhaArray.push(geraMaiuscula())
        minusculas && senhaArray.push(geraMinisculas())
        numeros && senhaArray.push(geraNumero())
        simbolos && senhaArray.push(geraSimbolo())
    }

    return(senhaArray.join('').slice(0,qtd))//Removendo o espaço e fatiando
}

