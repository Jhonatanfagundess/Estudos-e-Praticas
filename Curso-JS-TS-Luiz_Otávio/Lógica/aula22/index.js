//Escrever função ePaisagem
//Verificando se a imagem seria uma paisagem

function ePaisagem(largura,altura){
    return largura > altura ? true : false
}

//Outra forma 
//Arrow Fuction
const paisagem = (x,y) => {
    return x > y 
}
console.log(paisagem(1080,1980))