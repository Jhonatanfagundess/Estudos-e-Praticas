//Express
//Sempre chamamos aquilo que instalamos para ser executado
const express = require('express')
const app = express()

//Rota - Função
//Utilizamos um get para pegar as informações
app.get('/',(requisicao, resposta) => {
    resposta.send(
        //Podemos pegar html
        //Trabalhando com Html
        <form action ='/' method='POST'>

            Nome: <input type='text' name='name'>
            
            </input>

            <button>
                Enviar
            </button>
        </form>
    ) // Enviando a resposta 
})

//Utilizamos Post para exibir a sua resposta ou mostrar algo!
app.post('/',(req,res) => {
    res.send('Recebi formulário')
})

//outra rota
app.get('/contato', (req,res) => {
    res.send('Entrando em contato')
})

app.listen(3000, () => {
    console.log('Servidor sendo executado!')
})