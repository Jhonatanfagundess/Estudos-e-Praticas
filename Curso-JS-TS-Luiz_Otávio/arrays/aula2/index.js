//Método splice

const names = ['Jhonatan','Pedro','Guilherme','Vitória','Julia','Jéssica','Higor']

//nomes.splice(indice, delete, elem1, elem2, elem3)

//A var removidos salva em sua memória o valor que foi removido 
const removidos = names.splice(4,1)
console.log(names, removidos)


//Podemos adicionar tambem
const adicioanr = names.splice(3, 0, 'Luiz') //Ele foi add no índice 3
console.log(names)

//Simulando pop,shift
const pop = names.splice(-1, 1 )


const shift = names.splice(0,1)



//Simulando push e unshfit
const push = names.splice(names.length ,0, 'Gustavo')


const unshift = names.slice(0,0,'Elemento aqui')