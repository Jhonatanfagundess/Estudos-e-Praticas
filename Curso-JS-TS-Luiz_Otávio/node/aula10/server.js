//Trabalhando com parametros

// ? - Iniciando uma query string
//res.params - resp.query - resp.body

//res.params - Estamod falando da rota da URL

//res.query - aquilo que foi enviado na URL

//Resp.body
//app.use(express.urlencoded({extended: true}))

//Express
//Sempre chamamos aquilo que instalamos para ser executado
const express = require('express')
const app = express()
const routes = require('./routes')

app.use(routes)

app.listen(3000, () => {
    console.log('Servidor sendo executado!')
})


