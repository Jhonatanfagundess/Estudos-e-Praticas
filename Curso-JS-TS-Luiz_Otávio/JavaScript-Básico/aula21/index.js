//Tipos de valores primitivos e valores por referencia 

//Primitivos são valores imutáveis
//São valores copiados
//Dado é o valor!
let name = 'Jhonatan'
name[0] = 'Raul'
console.log(name)


//Referência é mutável - array, object and fuction

let a =  [1,2,3]
let b = a //Não cria uma cópia, aponta para os dados na memória então é afetado por alterações
a.push(4)
console.log(a,b)

//Aqui vemos que a alteração é feita na memoria pela segunda var declarada
b.pop(4)
console.log(a,b)


//Podemos criar uma cópia que não é alterada mesmo se o valor de referência for alterado
let aa = [1,2,3]
let bb = [...a] // Criando copia que não é alterada