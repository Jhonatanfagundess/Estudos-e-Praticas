//Herança com classes

class Dispositivo{
    constructor(name){
        this.name = name
        this.ligado = false //Começa desligad0
    }

    ligar(){
        if(this.ligado){
            return 
        }

        this.ligado = true
    }

    desligar(){
        if(!this.ligado){
            return 
        }

        this.ligado = false
    }
}

//Nova classe que vai ter a herança!!
//Uma maneira bem rápida de ter a herança usando apenas o extends
class Smartphone extends Dispositivo{
    constructor(name,color,modelo){
        super(name) //Aqui é onde pegamos as propriedades da classe pai
        this.color = color
        this.modelo = modelo
    }
}

//A propriedade this.ligado vem também como herança mesmo
const s1 = new Smartphone('Apple', 'Black', '2022')
s1.ligar() // Usando o método na classe filha
console.log(s1)

//Cuidando com a herança para verificar de quem sua classe está herdando
class Notebook extends Smartphone{
    constructor(name,modelo,lançamento){
        super(name,modelo)
        this.lançamento = lançamento
    }

    //Podemos sobrescrever um método assim como criar novos apenas para essa classe
    ligar(){
        console.log('Podemos alterar um método')
    }
}
//Com herança aqui ele segue a ORDEM que já está feita!!
//NAME,COLOR,MODELO E LANÇAMENTO
//Mesmo não colocar a propriedade ela vem herdada
const n1 = new Notebook('Apple','black','2022','2020' )
console.log(n1)


//As classes herdam coisas de suas classes pais
//mas as classes pais não herdam nada das suas filhas