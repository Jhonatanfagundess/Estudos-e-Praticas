//Objetos 

//Uma forma bastante ultrapassada e não deve ser feito dessa forma
const name = 'Jhonatan'
const sobreName = 'Fagundes'
const age = 22

const people = {
    name:'Jhonatan',
    sobreName:'Fagundes',
    age:22,

    //O metodo !
    talk(){
        console.log('Hello World')
    }
}
console.log(people)
console.log(people.sobreName)
console.log(people.age)

//Criando uma fuction e fazendo um objeto
function NewPeople(name,sobreNome,idade){
    return{
        name:name,
        sobreNome:sobreNome,
        idade:idade
    }   
}

const pessoa1 = NewPeople("Jhonatan",'Fagundes',22)
const pessoa2 = NewPeople("Maria",'Costa',22)
const pessoa3 = NewPeople("Raul",'Silva',22)
const pessoa4 = NewPeople("Pedro",'Daniel',22)
const pessoa5 = NewPeople("Japa",'Fagundes',22)

console.log(pessoa1.name, pessoa2.name)

//Podemos ter uma função dentro de um objeto, isso seria um metodo!
const peopleMore = {
    name:'Jhonatan',
    sobreName:'Fagundes',
    age:22,

    //O metodo !
    //Usando o this para referenciar o objeto
    talk(){
        console.log(`${this.name} ${this.sobreName} está dizendo que tem ${this.age}` )
    },

    //Modificando o valor do objeto
    ageUp(){
        this.age++
    }
}


//Conforme for chamado o metodo ageUp a idade vai ser incremetada cada vez mais
peopleMore.talk(),
peopleMore.ageUp(),
peopleMore.talk()

