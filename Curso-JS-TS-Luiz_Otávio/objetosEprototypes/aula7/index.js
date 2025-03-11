//Herança


function Produto(name, price){
    this.name = name,
    this.price = price
}

//Métodos são sempre forado object!!
Produto.prototype.aumento = function(aum){
    this.price += aum
}
Produto.prototype.desconto = function(des){
    this.price -= des
}


function Camiseta(name, price, color){
    Produto.call(this, name, price),
    this.color = color //Uma Propriedade nova
}
Camiseta.prototype = Object.create(Produto.prototype)// Fazendo o object herdar o prototype de Produto
Camiseta.prototype.constructor = Camiseta //Fazendo o constructor

const camisa = new Camiseta('Oversized', 99.9, 'Black')


//Outro Object
function Caneca(name, price, material, estoque){
    Produto.call(this, name, price)
    this.material = material // Uma nova propriedade
    // this.estoque = estoque // Uma nova propriedade

    //Criando e configurando a nova propriedade
    Object.defineProperty(this, 'estoque', {
        enumerable:true, //Vísivel
    
        get: function(){
            return estoque
        },
        set: function(value){
            if(typeof valor !== 'number') return
            estoque = value
        }
    })
}
Caneca.prototype = Object.create(Produto.prototype)//Herdar
Caneca.prototype.constructor = Caneca //Fazendo o constructor
Caneca.prototype.desconto = function(des){
    this.price = this.price - (this.price * (des/100))
}//Sobrescrevendo um método

const caneca = new Caneca('Minha caneca Favorita', 25, 'porcelana', 100)
console.log(caneca)