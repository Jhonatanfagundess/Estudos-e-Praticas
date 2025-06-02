
//Função separada
exports.paginaInicial = (req,res) => {
    res.send(
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
}


exports.trataPost = (req,res) => {
    res.send('Uma nova rota de post')
}