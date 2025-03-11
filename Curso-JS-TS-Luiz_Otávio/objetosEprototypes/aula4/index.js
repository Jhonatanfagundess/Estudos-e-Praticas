//Métodos Objetos

//Copiar um objeto - spread e object.assign   
const produto = {
    nome:'Caneca',
    price:1.7,


}
produto.name = 'Caneca de anime' //Sobrescrever não é copiar o objeto


const copiaProduto = {...produto,
    material:'Lápis' // Colocando mais coisas no objeto
} // Cópia 
const caneca = Object.assign({}, produto, {feito:'Porcelana'}) // Outra maneira de fazer uma cópia


//Aqui podemos ver as descrições das propriedades do objeto
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))

//Lendo apenas os valores e não vendo o objeto
console.log(Object.values(produto))

//Me retorna os valores separados em arrays
console.log(Object.entries(produto))