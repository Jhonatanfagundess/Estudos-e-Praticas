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
    
    request({
        method:'GET',
        url: href,
    })

  
    const response = await request(objConfig)
    carregaPagina(response)

}

function carregaPagina(response){
    const resultado = document.querySelector('.resultado')
    resultado.innerHTML = response
}