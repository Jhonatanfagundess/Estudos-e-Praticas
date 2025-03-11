//Prototypes
//Colocando métodos/ informações novas dentro do objeto
//Colocando métodos dentro do prototype ele não precisa estar no corpo do objeto

function Pessoa(name, sobrename){
    this.name = name
    this.sobrename = sobrename

    //Método 
    this.nameFull = () => {
        this.name + ' ' + this.sobrename

        //O motor do JS vai verificar primeiro sempre se dentro do objeto tem um método definido, e se estiver dentro da função construtora ela fica a frente.
    }
}

//Pessoa.proyotype === _ __proto___

//Está fora do escopo da função constutora!!
//O motor do JS só vai verificar fora da função construtora após verificar ela mesma!
Pessoa.prototype.NomeCompleto = () => {
    return this.name + ' ' + this.sobrename
}

Pessoa.prototype.IamHere = 'Estou aqui' // Colocando dentro do objeto o prototype

const pessoaOne = new Pessoa('Jhonatan', 'Fagundes')
const data = new Date()