
const HomeModel = require('../models/homeModel')

HomeModel.create({
    title: 'Um título qualquer',
    description : 'Uma descrição básica'
}).then(dados => console.log(dados)) //Mostrando o dado
.catch(e => console.log(e)) //Mostrando o erro 


//Função separada
exports.paginaInicial = (req,res) => {
    req.flash('info', 'Sucess')
    req.session.usuario = {nome : 'Jhonatan', logado: true}
    return
}


exports.trataPost = (req,res) => {
    res.send(req.body)
    return
}