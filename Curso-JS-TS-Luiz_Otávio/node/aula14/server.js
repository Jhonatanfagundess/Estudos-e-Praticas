//Express
//Sempre chamamos aquilo que instalamos para ser executado
require('dotenv').config()

const express = require('express')
const app = express()

//Fazendo a conexão da base de dados
const mongoose = require("mongoose")


// const connectionString = link da conexão apagado

mongoose.connect(process.env.CONNECTIONSTRING)

const session = require('express-session') //Salvando a sessão na memória
const MongoStore = require('connect-mongo')//Conexão
const flash = require('connect-flash') //Flash

const routes = require('./routes')
const path = require('path') //Trabalhando com caminhos
const meuMiddleware = require('./src/middlewares/middle')//Importando o middleware 


app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

const sessionOptions = session({
    secret:'huehuehue',
    store: MongoStore.create({ mongooseConnection: mongoose.connection}),
    resave: false,
    saveUninitialized:false,
    cookie: {
      
        httpOnly:true
    }
})

app.use(sessionOptions)
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'))
app.set('view engine', 'ejs')

//Utilizando nosso prórpio middlewares
app.use(meuMiddleware)
//Está puxando tudo aquilo que foi importado para rotas em seu arquivo PAI
app.use(routes) 




