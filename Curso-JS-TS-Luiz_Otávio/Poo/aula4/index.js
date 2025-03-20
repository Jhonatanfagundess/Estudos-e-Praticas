//Métodos de instância e estáticos
//Sem utilizar a palavra NEW para ter acesso 

class ControleRemoto{
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    //Método de instância
    aumentarVolume(){
        this.volume += 2 //Aumentando 
    }
    //Método de instância
    diminuirVolume (){
        this.volume -= 2 //Diminuindo 
    }


    //Método de estático
    //Esse método só é acessado pela classe não pela instância
    //OU seja precisamos chamar a classe e depois o método
    static trocaPilha(){
        console.log('Troca Pilha')
    }
}

const controle = new ControleRemoto('Samsung')//Instância
controle.aumentarVolume()//Aumentando de 2 em 2
controle.aumentarVolume()//Aumentando de 2 em 2
console.log(controle)

//o método estático aqui 
//Sendo acessado pela classe
ControleRemoto.trocaPilha()