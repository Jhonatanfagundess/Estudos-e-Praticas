//Funções geradores

//Atenção em como declarei ela!
//* 
function* geradora1(){

  //Vai me retornar um desses valores!  
  yield 'Valor 1'
  yield 'Valor 2'
  yield 'Valor 3'
}

const g1 = geradora1()
//Vai estar me retornando os próximos valores
console.log(g1.next().value)
console.log(g1.next().value)
console.log(g1.next().value)


function* contador(){
    let i = 0 

    //Loop infinito
    while(true){
        yield i;
        i++
    }
}

const c1 = contador()
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)
console.log(c1.next().value)


function* gerador2(){
    yield 0;
    yield 1;
    yield 2;
}

//Delegando os valores anteriores
//Fazendo assim ela continuar o contador
function* gerador3(){
    yield* gerador2()
    yield 3;
    yield 4;
    yield 5;
}


const g3 = gerador3()
for(let valor of g3){
    console.log(valor)
}