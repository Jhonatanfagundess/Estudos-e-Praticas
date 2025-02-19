//Funções que retornam objetos
//Função fábrica(Factory fuction)
//constructor fuction(Função construtora)


function criPessoa(name,sobrename,altura,peso){
    return{
        name,
        sobrename,

        //Colocando um getter aqui novamente
        get nomeCompleto(){
            return `${this.name} ${this.sobrename}`
        },

        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ') //Divindi o valor em um array
            this.name = valor.shift()
            this.sobrename = valor.join(' ')
        },

        fala: function(assunto){
            return `${this.name} está falando sobre ${assunto}!`
        },

        altura: altura,
        peso: peso,

        //Colocando get a função vai começar a fingir ser um objeto
        //get seria GETTER
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        },

    }
}

const p1 = criPessoa('Jhonatan','Fagundes', 1.8, 85)
p1.nomeCompleto = 'Pedro Henrique Silva'
console.log(p1.nomeCompleto)
console.log(p1.imc)
console.log(p1.fala('Videogame'))//Acessando o método aqui 
//Quem chamou é o This
//Exemplo p1 é o this pois ele que chama o objeto
