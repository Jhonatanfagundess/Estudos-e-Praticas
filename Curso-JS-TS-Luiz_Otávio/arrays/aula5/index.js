//Map
//Mapeando o array
//Os conceitos são iguais ao filter, mas ela retorna um outro array com valores diferentes


//Vai ter sempre o mesmo tamanho do array original(Diferente do filter)
//Dobre os números
const numeros = [5,50,80,1,2,3,4,58,11,15,22,27]
const numeroEmDobro = numeros.map((valor) => {
    return valor * 2
})
console.log(numeroEmDobro)



//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave "name" do objeto
//adicione uma chave de id em cada objeto
const pessoas = [
    {name:'Luiz', idade:62},
    {name:'Pedro', idade:25},
    {name:'Vitória', idade:32},
    {name:'Raul', idade:47},
    {name:'Milena', idade:19},
    {name:'Jéssica', idade:50}
]


//Aqui estamos mexendo no array original!
//Para que isso não ocorra temos que usar o spread com um novo objeto
//Ou seja cria um novo objeto para cada execução do código

const nameString = pessoas.map((valor) => {
    return `O nome da pessoa é: ${valor.name}`
})
console.log(nameString)


//Metodo delete "novo"
const RemoveName = pessoas.map((valor) => {
    const remove = { ...valor} //Spread
    delete remove.name // Deletando os valores do array
    return remove
})
console.log(RemoveName)


//Adicionando algo no array
const adicionarId = pessoas.map((valor,indice) => {
    const newValor = { ...valor} //Spread
    newValor.id = indice + 1
    return newValor
})
console.log(adicionarId)
