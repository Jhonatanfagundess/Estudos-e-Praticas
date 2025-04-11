//Configurações do webpack

//Fazendo a requisição do módulo
const path = require('path')

//Configuração aqui
module.exports = {
    mode:"development",
    entry:"./src/index.js", //Sua entrada
    output:{
     path: path.resolve(__dirname, "public", "assets", "js"),//Onde vai sair
        filename:"bundle.js" //Nome do arquivo de saída
    },
    module : {
        rules: [{
            exclude:/node_modules/,
            test:/\.js$/, //Termina com essa expressão ou seja termina com JS(jAVASCRIPT)
            use: {
                loader:'babel-loader',
                options: {
                    presets: ["@babel/env"]
                }
            }
        }]
    },
    devtool :'source-map', //Mapeamento de erro no arquivo original
}