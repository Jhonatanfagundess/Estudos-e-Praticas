module.exports = (req, res, next) => {
    console.log('Passando pelo Middleware Global')
}

exports.middlewareGlobal = (req,res,next) => {
    res.locals.varGlobalLocal = 'Um teste para o valor de var'
    next()
}


exports.checkCsrfError = (err, req, res, next) => {
 if(err && err.code === 'EBADCSRFTOKEN'){
    return res.render('404') //Renderizando a página 
 }
}


exports.csrfMiddleware = (req, res, next) => {
    res.locals.crsfToken = req.crsfToken()
    next()
}