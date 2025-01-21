const paragrafos = document.querySelector('.paragrafos') // Selecionando a DIV
const ps = paragrafos.querySelectorAll('p') //Acessando os P

//Pegando o estilo do navegador
const estilos = getComputedStyle(document.body)
const backgroundColorBody = estilos.backgroundColor

for(let p of ps){
    p.style.backgroundColor = backgroundColorBody // Colocando a cor de fundo nos P
    p.style.color = 'White' // Colocando a cor nas letras
}
