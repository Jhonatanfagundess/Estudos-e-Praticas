//Exercício de função

function maiorMenor(a,b){
    if(a > b){
        return `${a} é maior!`
    }else if(a < b){
        return `${b} é maior`
    }else{
        return `Ambos tem o mesmo valor!`
    }
}

//Uma outra forma 
//Estamos usando o if e else mas de maneira mais simples
//Lembrando que podiamos usar até dentro de uma variavel
function againMaior(a,b){
    return  a > b ? `${a} é maior aqui` : `${b} é maior`
}

//Outra forma
function outraForma(a,b){
    return Math.max(a,b)
}

//Usando uma arroy function aqui 
const max = (x,y) => {
    return x > y ? x : y
}

console.log(maiorMenor(20,20))
console.log(outraForma(20,15))
console.log(againMaior(20,30))
console.log(max(25,50))