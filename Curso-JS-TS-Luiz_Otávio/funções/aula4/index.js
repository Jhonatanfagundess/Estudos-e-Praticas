//Escopo léxico
//A função conhece onde ela foi declarada
//Onde ela está!

const name = 'Jhonatan'
function falaName(){
    //const name = 'Gabriel' - Já declaramos aqui o name é alterado
    //E assim o nome se altera também na próxima fuction
    console.log(name)
}
//falaName()

//A fuction procura e lembra o que a variavel estava declarando
//Ela sabe todos os vizinhos 
function usaFalaName(){
    const name = 'Raul' //Isso não mexe no valor já armazenado 
    falaName()
}
usaFalaName()