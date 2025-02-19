function criaCalculadora(){
    return{
        //váriaveis aqui
        display : document.querySelector('.display'), //Dentro do objeto
        btnClear: document.querySelector('.btn-clear'),





        inicia(){
            //Sempre quando eu precisar referência um objeto dentro de outro
            //Uso o this!!
            this.clickBtn()
            this.pressionaEnter()
        },


        //Metodos aqui

        //Limpando o display
        clearDisplay(){
            this.display.value = ''
        },

        //Deletando um aqui
        deleteOne(){
            this.display.value = this.display.value.slice(0-1)
        },

        btnParaDisplay(valor){
                this.display.value += valor
            },


        realizaConta(){
            let conta = this.display.value

            try{
                conta = eval(conta) //Cuidado com o eval

                if(!conta){
                    alert('Conta inválida')
                    return
                }

                this.display.value = String(conta)
            }catch(e){
                alert('Conta inválida')
                return
            }
        },

        //Quando presionar o enter
        pressionaEnter(){
            this.display.addEventListener('keyup', (e) => {
                if(e.keyCode === 13){
                    this.realizaConta()
                }
            })
        },


        //Chamando o evento de click aqui 
        clickBtn(){
            document.addEventListener('click', function(ev){
                const el = ev.target

                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText)
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay()
                }

                if(el.classList.contains('btn-del')){
                    this.deleteOne()
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta()
                }
            }.bind(this));//Estamos fazendo ele usar o meu this!
        },

    }
}

const calculadora = criaCalculadora()
calculadora.inicia()