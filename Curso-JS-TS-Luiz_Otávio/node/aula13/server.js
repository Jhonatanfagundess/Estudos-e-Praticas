//Trabalhando com parametros

// ? - Iniciando uma query string
//res.params - resp.query - resp.body

//res.params - Estamod falando da rota da URL

//res.query - aquilo que foi enviado na URL

//Resp.body


//Express
//Sempre chamamos aquilo que instalamos para ser executado
const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path') //Trabalhando com caminhos
const meuMiddleware = require('./src/middlewares/middle')//Importando o middleware 


app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//Utilizando nosso prórpio middlewares
app.use(meuMiddleware)
//Está puxando tudo aquilo que foi importado para rotas em seu arquivo PAI
app.use(routes) 


app.listen(3000, () => {
    console.log('Servidor sendo executado!')
})


