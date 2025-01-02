const name  = prompt('Qual seu nome completo?')
document.body.innerHTML += `O seu nome é: ${name} <br/>`
document.body.innerHTML += `Seu nome tem: ${name.length} <br/>`
document.body.innerHTML += `Segunda letra: ${name[1]} <br/>`
document.body.innerHTML += `Primeiro indice: ${name.indexOf('a')} <br/>`
document.body.innerHTML += `Ultimo índice: ${name.lastIndexOf('a')} <br/>` // Procurar por último
document.body.innerHTML += `Ultimas três Letras: ${name.slice(-3 , name.length)} <br/>`
document.body.innerHTML += `As palavras do meu nome : ${name.split(" ")} <br/>`
document.body.innerHTML += `Meu nome em letra maiúsculas : ${name.toUpperCase()} <br/>`
document.body.innerHTML += `Meu nome em letra maiúsculas : ${name.toLowerCase()} <br/>`






//Escrevendo direto no HTML
//Podemos usar atribuição com a concatenação
//document.body.innerHTML += 'Qualquer título possível'