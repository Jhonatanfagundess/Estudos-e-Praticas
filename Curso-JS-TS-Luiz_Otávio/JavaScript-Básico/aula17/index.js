//Exercício com Numbers e Match

const value = Number(prompt('Digite seu número:'))
const valueTitle = document.getElementById('valueTitle')
const texto = document.getElementById('texto')

valueTitle.innerHTML = value

const quadrada = Math.sqrt(value)
const int = Number.isInteger(value)
const Isnumber = value
const Up = Math.ceil(value)
const down = Math.floor(value)
const TwoDecimals = Number.parseFloat(value.toFixed(2))


texto.innerHTML += `<p>Raiz Quadrada é : ${quadrada}</p>`
texto.innerHTML += `<p>É NaN? : ${Number.isNaN(value)}</p>`
texto.innerHTML += `<p>${value} é inteiro? ${int}</p>`
texto.innerHTML += `<p>Arrendondado para cima: ${Up}</p>`
texto.innerHTML += `<p>Arrendondado para baixo: ${down}</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${TwoDecimals}</p>`


