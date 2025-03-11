//Polimorfimos
//Métodos agirem de forma diferente de acordo com a classe/O que é solicitado

function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}
//Métodos 
Conta.prototype.sacar = function(valor){
    if(this.saldo <= valor) {
        return this.verSaldo()
    }

    this.saldo -= valor //Tirando o valor da conta que ela sacou
    this.verSaldo()//Mostrando o saldo
}
Conta.prototype.depositar = function(valor){
    this.saldo += valor //Adicionando valores
    this.verSaldo()//Mostrando o saldo 
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c: ${this.agencia}/${this.conta}` + 
        `Saldo: R$: ${this.saldo.toFixed(2)}`//Colocando o valor fixado(Casas decimais)
    )
}


//Conta corrente
function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)//Herança
ContaCorrente.prototype.constructor = ContaCorrente // constructor
//Sobrescrevendo
//Mesmo tendo método já feito ele atua de forma diferente 
ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)) {
        return `Saldo insuficiente ${this.saldo}`
    }

    this.saldo -= valor //Tirando o valor da conta que ela sacou
    this.verSaldo()//Mostrando o saldo
}


//Conta Poupança
function ContaPoupanca(agencia,conta,saldo){
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)//Herança
ContaPoupanca.prototype.constructor = ContaPoupanca // constructor

//O método vai se comportar de maneira diferente!
//Pois aqui não posso sacar se eu não tiver o saldo em conta igual na primeira vez que criei o método!
//Já com a alteração que fiz para a conta corrente o cliente pode tirar seu saldo e também até -100 e ficar negativado em conta!
//Polimorfimos é quando métodos atuam de forma diferente em conta Constructor
//Mesmo tendo o mesmo nome