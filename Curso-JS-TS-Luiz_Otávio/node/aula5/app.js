const path = require('path') //Mexendo com caminhos
const caminhoArquivo = path.resolve(__dirname,  'teste.json')
const escreve = require('./modules/escrever') //Importação
const ler = require('./modules/ler') //Importação

//Função para ler o arquivo
async function lerArquivo(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados) //Função
}
function renderizaDados(dados){
    console.log(dados)
}    


//Objetos
const pessoas = [
    {name:'Jhonatan'},
    {name:'Raul'},
    {name:'Guilherme'},
    {name:'Lucas'},
    {name:'Pedro'},
    {name:'Jessica'}

]
//Escrevendo no arquivo
const json = JSON.stringify(pessoas, '', 2)
escreve(caminhoArquivo, json)