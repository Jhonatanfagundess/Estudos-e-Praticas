//Conversão da calculadora de função fábrica para função construtora
//Conversão da calculadora de função fábrica para função construtora
function Calculadora(){
    this.display = document.querySelector('.display')
    this.btnClear = document.querySelector('.btn-clear')

    this.inicia = () => {
        this.clickBtn()
        this.pressionaEnter()
          }

        this.clearDisplay = () =>{
            this.display.value = ''
        }

        this.deleteOne = () => {
            this.display.value = this.display.value.slice(0-1)
        }

        this.btnParaDisplay = (valor) =>{
            this.display.value += valor
        }

        this.realizarConta = () => {
            let conta = this.display.value

            try{
                conta = eval(conta) 

                if(!conta){
                    alert('Valor inválido')
                    return
                }

                this.display.value = String(conta)
            }catch(e){
                alert('Valor inválido')
                return
            }

            this.pressionaEnter = () =>{
                this.display.addEventListener('keyup',(e) => {
                    if(e.keycode === 13){
                        this.realizarConta()
                    }
                })
            }

            this.clickBtn = () =>{
                document.addEventListener('click', (e) => {
                    const el = e.target

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
                })
            }
        }
    
}

const callCalculadora = new Calculadora()
callCalculadora.inicia()