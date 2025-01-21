const elementos = [
    {tag:'p', texto:'Frase 1'},
    {tag:'div', texto: 'Frase 2'},
    {tag:'section', texto:'Frase 3'},
    {tag:'footer', texto:'Frase 4'}
]

const container = document.querySelector('.container')
const div = document.createElement('div') //Vai conter tudo

for(let i = 0; i < elementos.length; i++){
    const {tag, texto} = elementos[i] //Fazendo a desestruturação
    const tagCriadas = document.createElement(tag) //Criando o elemento
    tagCriadas.innerText = texto //Adicionando o texto
    div.appendChild(tagCriadas) //Criando a tag
}

container.appendChild(div) //Criando a div que vai conter tudo