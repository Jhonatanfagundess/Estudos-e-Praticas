//Funções construtora
//Ela cria e retorna o objeto desde a sua criação
//Mesma coisa para funções fábrica

//Ela precisa ser Iniciada com letra maiuscula
//Isso seria uma prática de programação
function Pessoa(name,sobrenome){
    const id = 123456789

    const metodoInterno = function() {
        console.log('Sou uma fuction restritá ao objeto')
    }

    //Atributo público
    this.name = name;
    this.sobrenome = sobrenome;

    this.metodo = () => {
        console.log('Sou um método!')
    };
}


const p1 = new Pessoa('Jhonatan', ' Fagundes')
p1.metodo()
