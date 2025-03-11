//factory fuction + prototypes

//Separando os métodos da function
//Composição é como chamado o que estamos fazendo!
const falar = {
    fala(){
        console.log('Estou falando')
    }
}
const beber = {
    bebendo(){
        console.log('Estou bebendo!')
    }
}

//Usando o spread
//Jogando os métodos aqui para que quando se mexa na estrutura do método, seja aplicado para todas as vezes que ele é chamado no programa
const pessoaPrototype = {
    ...falar, ...beber
}

function criaPessoa(name,sobrename){
     return Object.create(pessoaPrototype,{
        name:{value:name},
        sobrename:{value:sobrename}
     })
}

const p1 = criaPessoa('Jhonatan', 'Fagundes')