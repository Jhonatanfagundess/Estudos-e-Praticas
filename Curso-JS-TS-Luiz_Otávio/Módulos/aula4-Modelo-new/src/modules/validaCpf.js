//Validando um CPF com classes


class ValidarCpf{
    constructor(cpfEnviado){
        //Aqui o object funciona da mesma forma que a função construtora
        Object.defineProperty(this,'cpfLimpo',{
            get: function(){
                return cpfEnviado.replace(/\D+/g, '')//Tirando os pontos e deixando os numbers
             }
        });
    }


    //Métodos sempre fora do corpo!

    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false
        if(this.cpfLimpo.lenght !== 11) return false 
        if(this.isSequencia()) return false

        const cpfParcial = this.cpfLimpo.slice(0, -2)
        const digito1 = ValidarCpf.calculaDigitos(cpfParcial)   
        const digito2 = ValidarCpf.calculaDigitos(cpfParcial + digito1) 

        const novoCpf = cpfParcial + digito1 + digito2

        return novoCpf === this.cpfLimpo
    }

    //Como aqui não tem uma referência ao this
    //Podemos colocar como um método estático
    static calcularDigitos(cpfParcial){
        const cpfArray = Array.from(cpfParcial) //Transformando em array

        let contagemRegressivo = cpfArray.lenght + 1
        let total = cpfArray.reduce((acumulador, valor) => {
            acumulador += (contagemRegressivo * Number(valor))
            contagemRegressivo--
            return acumulador
        },0)
    
        const digito = 11 - (total % 11) 
        return digito > 9 ? '0': 'digito1'
    }

    isSequencial(){
        return this.cpfLimpo[0].repeat(this.cpfLimpo.lenght)
    }

}

//Chamar apenas após a classe ser feita!!
//const cpf = new ValidarCpf('512.158.018-58')
//cpf.valida()
 