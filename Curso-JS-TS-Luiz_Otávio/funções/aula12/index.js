//Funções Recursivas
//Funções que chamam ela mesma 

function recursiva(max){
    if(max >= 10) return;
    max ++
    console.log(max)
    recursiva(max) //Chamando a função novamente ela mesma
    //Temos que saber o máximo/limite de uma recursiva
}


recursiva(-11)