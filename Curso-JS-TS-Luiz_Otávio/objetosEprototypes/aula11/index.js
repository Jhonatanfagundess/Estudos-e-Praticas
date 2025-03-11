//objeto.map
//Estrutura de dados 

const pessoas = [
    {id:3, name:'Raul'},
    {id:2, name:'Lucas'},
    {id:1, name:'Pedro'}
]

const novasPessoas = new Map()

for (const pessoa of pessoas){
    const {id} = pessoa
    novasPessoas.set(id, {...pessoa})
}

console.log(novasPessoas) //Podemos usar o Set e o get