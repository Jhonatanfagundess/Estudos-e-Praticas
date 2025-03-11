//Manipulando prototypes
const objA = {
    chaveA: 'A'
    //__proto__:object.prototype
}

const objB = {
    chaveA: 'B'
}

//Outra forma de fazer um objeto
const objC = new Object()
objC.chaveC = 'C'

Object.setPrototypeOf(objB, objA) //Dentro do object B estará o object A
Object.setPrototypeOf(objB, objC) // Dentro do object C estará o object B


function Produto(name, price){
    this.name = name
    this.price = price
}

//Método
//Lembre-se método fora do object é mais performático 
Produto.prototype.desconto = function(des) {
    this.price = this.price - (this.price * (des / 100) )
}

//Método de aumento 
Produto.prototype.aumento = function(aum) {
    this.price = this.price + (this.price * (aum / 100))
}


const p1 = new Produto('Camisa', 100)
p1.desconto(25)
console.log(p1)

const p2 = new Produto('Oversized', 70)
p2.aumento(10)
console.log(p2)

//Literal
//Herança para outro object
const p3 = {
    name:'Caneca',
    price: 10
}

Object.setPrototypeOf(p3, Produto.prototype)
p3.aumento(10)
console.log(p3)

//Criando um object novo e fazendo ele herdar os métodos do Produto
const p4 = Object.create(Produto.prototype, {
    price: {
        writable:true,
        value:22,
        configurable:true,
        enumerable:true
    },
    tamanho: {
        writable:true,
        value:40,
        configurable:true,
        enumerable:true
    }
})

p4.aumento(10)
console.log(p4)