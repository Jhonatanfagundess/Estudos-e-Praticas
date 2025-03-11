//Object.defineProperty e object.defineProperties

function Produto(name,price,estoque){
    //this.name = name, --- está abaixo
    //this.price = price, -- está abaixo
    //this.estoque = estoque //Teoricamente não queremos que nosso cliente veja isso

    Object.defineProperty(this, 'estoque' , {
        enumerable:true, //Exibimos aqui 
        value: estoque, //valor que ela terá
        writable: true, //Pode ser alterada? True ou false
        configurable:false //Pode reconfigurar a chave?
    })

    //Aqui é quando as chaves são bem mais sensíveis
    //assim podemos configurar ela melhor
    Object.defineProperties(this, {
        name: {
            enumerable:true, //Exibimos aqui 
            value: name, //valor que ela terá
            writable: true, //Pode ser alterada? True ou false
            configurable:true //Pode reconfigurar a chave?
        },
        price: {
            enumerable:true, //Exibimos aqui 
            value: price, //valor que ela terá
            writable: true, //Pode ser alterada? True ou false
            configurable:true //Pode reconfigurar a chave?
        }
    })


}
const p1 = new Produto('Raul', 50, 5)
console.log(p1)
