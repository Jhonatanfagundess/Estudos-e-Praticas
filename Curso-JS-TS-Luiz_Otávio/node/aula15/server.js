//Express
//Sempre chamamos aquilo que instalamos para ser executado
require('dotenv').config()

const express = require('express')
const app = express()

//Fazendo a conexão da base de dados
const mongoose = require("mongoose")


// const connectionString = link da conexão apagado
mongoose.connect(process.env.CONNECTIONSTRING)

const session = require('express-session') //Salvando a sessão na memória || Cookies
const MongoStore = require('connect-mongo')//Conexão
const flash = require('connect-flash') //Flash

const routes = require('./routes')
const path = require('path') //Trabalhando com caminhos
const helmet = require('helmet')
const csrf = require('csurf') //Tokens para o formulários 
const {meuMiddleware , checkCsrfError , csrfMiddleware} = require('./src/middlewares/middle')//Importando o middleware 

app.use(helmet())
app.use(express.urlencoded({extended: true})) //Pode postar formulários
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')))//pode acesar diretamente

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

app.set('views', path.resolve(__dirname, 'src', 'views')) //Renderiza na tela
app.set('view engine', 'ejs')//Engine usada para renderizar

app.use(csrf())

//Utilizando nosso prórpio middlewares
app.use(meuMiddleware)
app.use(checkCsrfError)
app.use(csrfMiddleware)

//Está puxando tudo aquilo que foi importado para rotas em seu arquivo PAI
app.use(routes) 


app.on('pronto' , () => {
    app.listen(3000, () => {
        console.log('Acessar http://localhost:3000')
    })
})



