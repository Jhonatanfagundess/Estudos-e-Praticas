//Trabalhando com parametros

// ? - Iniciando uma query string
//res.params - resp.query - resp.body

//res.params - Estamod falando da rota da URL

//res.query - aquilo que foi enviado na URL

//Resp.body
app.use(express.urlencoded({extended: true}))

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

//Uma nova rota trabalhando com req
app.get('/testes/:idUsers?/:parametroOpicional', (req,res) => {
    console.log(req.params)
    res.send(res.params.idUsers) //Aqui estamos exibindo aquilo que enviamos e mostrando em teka
})

//Utilizamos Post para exibir a sua resposta ou mostrar algo!
app.post('/',(req,res) => {
    res.send('Recebi formulário')
})


app.listen(3000, () => {
    console.log('Servidor sendo executado!')
})



//outra rota
app.get('/contato', (req,res) => {
    res.send('Entrando em contato')
})