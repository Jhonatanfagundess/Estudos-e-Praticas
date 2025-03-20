//getters e setters na classe

//Podemos criar uma chave privada dentro do objeto
const _vel = Symbol('velocidade')

class Car{
    constructor(name){
        this.name = name
        this[_vel] = 0 //Propriedade privada
    }

    set vel(value){
        if(typeof value !== 'number') return
        if(value >= 100 || valor <= 0 ) return
        this[_vel] = value
    }

    get vel(){
        return this[_vel]
    }

    acelerar(){
        if(this[_vel] >= 100) return //Limitando a velocidade
        this[_vel] ++
    }

    freiar(){
        if(this[_vel] <= 0) return //Freando o carro
        this[_vel]--
    }
}

const c1 = new Car("Jhonatan")

/*for(let i = 0; i <= 200; i++){
    c1.acelerar()
}*/

class Pessoa{
    constructor(name,sobrename){
        this.name = name
        this.sobrename = sobrename
    }

    //lembre-se que estamos disfarçando um método como um objeto
    get nameFull(){
        return this.name + " " + this.sobrename
    }

    set nameFull(value){
        value = value.split(" ")
        this.name = value.shift()
        this.sobrename = value.join(' ')
    }
}

const p1 = new Pessoa('Jhonatan', 'Fagundes')
console.log(p1.nameFull)


