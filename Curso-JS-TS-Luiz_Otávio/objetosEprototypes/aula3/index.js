//Getters e Setters
//Fazer um método simular que ele é um objeto

//getter para obter um valor
//setter para configurar

function Produto(name,price,estoque){
    this.name = name,
    this.price = price,

    Object.defineProperty(this, 'estoque', {
        enumerable:true, //Mostra a chave
        // value:estoque, //Valor
        // writable:true, //Pode alterar
        configurable:false,//Configurável
        get:function(){
            return estoque
        },
        set: function(valor){
            if(typeof valor !== 'number') throw new TypeError('Não é um número! Inválido')
        }
    })
}
const p1 = new Produto('Raul', 50, 5)
console.log(p1)
