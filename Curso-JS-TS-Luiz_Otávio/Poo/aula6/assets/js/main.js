class ValidaForms{
    constructor(){
        this.formulario = document.querySelector(".formulario")//Corpo Principal
        this.eventos()//Método que vai fazer a inicialização
    }


    //métodos

    eventos(){
        //Evento
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e)
        })
    }

    //Capturando o evento 
    handleSubmit(e){
        e.preventDefault()
        const camposValidos = this.verificaCampos()
        const senhaValidas = this.senhaSaoValidas()

        //Formulário só vai ser enviado se for válido!
        if(camposValidos && senhaValidas){
            this.formulario.submit() //Enviando o formulário
        }
    }

    verificaCampos(){
        let valid = true

        for(let errorText of this.formulario.querySelectorAll(".error-text")){
            errorText.remove()
        }

        //pegando todos os campos dos formulários
        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerHTML //Elemento anterior!
            if(!campo.value){
                this.criaErro(campo, `Campo ${label} em branco ou mal preenchido`)
                valid = false
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false
            }

            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false
            }
        }

        return valid
    }


    senhaSaoValidas(){
        let valid = true

        const senha = this.formulario.querySelector('.senha')
        const repetirSenha = this.formulario.querySelector('.repetirSenha')

        //Verificando se ambas são iguais
        if(senha.value !== repetirSenha.value){
            valid = false
            this.criaErro(senha,'Campos senha e repetir a senha precisa ser')
            this.criaErro(repetirSenha,'Campos senha e repetir a senha precisa ser')
        }

        //tamanho solicitado
        if(senha.value.length < 6 || senha.value.length > 12){
            valid = false
            this.criaErro(senha,'Senha precisa ter entre 6 e 12 caracteres')
        }

        return valid
    }

    validaUsuario(campo){
        const usuario = campo.value
        let valid = true

        if(usuario.length < 3 || usuario.length > 12 ){
            this.criaErro(campo,'usuário precisa ter 3 a 12 caracteres')
            valid = false
        }

        //expressões regulares
        if(!usuario.match(/^[a-zA-Z0-9]+$/g) ){
            this.criaErro(campo,'usuário precisa ter letra e/ou números')
            valid = false
        }

        return true
    }

    validaCPF(campo){
        //Chamando o arquivo ValidaCpf
        //E sua class também!
        const cpf = new ValidarCpf(campo.value)

        if(!cpf.valida()) {
            this.criaErro(campo, 'cpf inválido')
            return false
        }

        return true
    }


    //Método que cria o erro!
    criaErro(campo, msg){ 
        const div = document.createElement('div') //Criando div
        div.innerHTML = msg
        div.classList.add("error-text")

        campo.insertAdjacentElement('afterend', div)
        
    }


}

const valida = new ValidaForms()