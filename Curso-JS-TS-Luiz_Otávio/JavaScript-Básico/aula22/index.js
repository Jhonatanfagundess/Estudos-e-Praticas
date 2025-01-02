function Escopo(){
    const form = document.querySelector('.form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEvento(evento){
        evento.preventDefault()

        const nome = form.querySelector('.name')
        const sobrenome = form.querySelector('.sobrenome')
        const peso = form.querySelector('.peso')
        const altura = form.querySelector('.altura')

        const lista = {
            name:nome.value,
            sobrenome:sobrenome.value,
            peso:peso.value,
            altura:altura.value 
        } // Aqui eu criei o objeto

        //Importente que eu poderia ser mais direto criando um pessoas.push{} sem precista ter uma const com os objetos seperados já

        pessoas.push(lista)

        console.log(pessoas)


        resultado.innerHTML += `${nome.value} ${sobrenome.value} - ${peso.value} - ${altura.value}`
    }


 

    form.addEventListener('submit', recebeEvento)
}



Escopo()