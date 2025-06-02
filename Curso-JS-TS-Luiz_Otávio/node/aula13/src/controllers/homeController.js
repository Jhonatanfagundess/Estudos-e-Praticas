
//Função separada
exports.paginaInicial = (req,res) => {
    res.render('index') //Fazendo a renderização da página
}


exports.trataPost = (req,res) => {
    res.send('Uma nova rota de post')
}