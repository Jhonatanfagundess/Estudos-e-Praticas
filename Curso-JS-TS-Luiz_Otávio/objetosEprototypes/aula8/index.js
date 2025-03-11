//Válidando CPF
const cpf = new ValidarCpf('512.158.018-58')
cpf.valida()

function ValidarCpf(cpfEnviado){
    Object.defineProperty(this, 'cpfLimpo',{
        get: function(){
           return cpfEnviado.replace(/\D+/g, '')//Tirando os pontos e deixando os numbers
        }
    })
}

//Validando o CPF
ValidarCpf.prototype.valida= function(){
    if(typeof this.cpfLimpo === 'undefined') return false
    if(this.cpfLimpo.lenght !== 11) return false 
    if(this.isSequencia()) return false

    const cpfParcial = this.cpfLimpo.slice(0, -2)
    const digito1 = this.calculaDigitos(cpfParcial)   
    const digito2 = this.calculaDigitos(cpfParcial + digito1)   

    const novoCpf = cpfParcial + digito1 + digito2

    return novoCpf === this.cpfLimpo
}

//Calculando digítos
ValidarCpf.prototype.calculaDigitos = function(cpfParcial){
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

//Verificando a sequência
ValidarCpf.prototype.isSequencia = function(){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.lenght)
}