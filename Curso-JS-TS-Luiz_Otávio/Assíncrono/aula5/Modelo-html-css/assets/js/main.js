//XML + promises]
const request = (obj) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest() //Chamando o construtor
        xhr.open(obj.method, obj.url, true)
        xhr.send()

        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText)
            }else{
                reject(xhr.statusText)
            }
        })
        })
    
}

//Pegando o evento no documento todo!!
document.addEventListener('click', e => {
    const el = e.target
    const tag = el.tagName.toLowerCase()

    if(tag === 'a'){
        e.preventDefault()
        carregaPagina(el)
    }
})

//Função seperada
async function carregaPagina(el){
    const href = el.getAttribute('href')
    const response = await fetch(href)
    if(response.status !== 200) throw new Error('Erro de status')
    const html = await response.text()  
    carregaPagina(html)



    // fetch(href)
    //   .then(response => {
    //     //Fazendo a verificação do status
    //     if(response.status !== 200) throw new Error('Erro de status')//Lançando erro
    //     return response.text()
    //   })
    //   .then(html => carregaPagina(html))
    //   .catch(e => console.log(e))
    

}

function carregaPagina(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}


//Vamos reescrever essa mesma função porém com fecth API

//Já retorna uma promise
// fetch("pagina1.html")
//     .then(resposta => {
//         if(resposta.status !== 200) throw new Error('ERRO 404')
//         return resposta.text()
//     })
//     .then(html => {console.log(html)})
//     .catch(e => {console.log(e)})