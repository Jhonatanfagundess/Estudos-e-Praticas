const nome = 'Jhonatan'
const sobrenome = 'Fagundes'
const idade = 23

function soma(x,y){
    return x + y
}

//Quando fazemos a importação sem chaves, estamos importando o default!!
//Ou seja sua versão que colocamos como padrão
export default(x,y) => {
    return x * y
}

//Podemos exportar de maneira individual também! 
//Fazendo a exportação inline
export class Pessoa{
    constructor(name,lastname){
        this.name = name
        this.lastname = lastname
    }
}

export{nome,sobrenome,idade , soma}