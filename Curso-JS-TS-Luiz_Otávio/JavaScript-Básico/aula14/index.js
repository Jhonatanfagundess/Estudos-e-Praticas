//Mais sobre Strings

//Podemos usar a barra invertida como Escape! \
let text = 'Texto Marcante' 

//Lembre que cada letra tem um indice
console.log(text[6])
console.log(text.concat(" ","em"," ","um mundo seguro")) // Concatenação

//Podemos Procurar o indice da string
console.log(text.indexOf('Texto',0)) //Podemos colocar o indice inicial de busca

//macth
console.log(text.match(/[a-z]/g)) // Expressões Regulares


//search
console.log(text.search(/x/))//Retornar o indice de onde foi encontrado


//Replace
//Podemos alterar uma palavra com replace
console.log(text.replace('Texto' , 'Neymar'))
console.log(text.replace(/a/g, 'x'))


//podemos pegar o tamano da string
console.log(text.length)


//Podemos fatiar a String com o slice
console.log(text.slice(0,5))
console.log(text.slice(-5))


//Podemos divir a string em arrays
//Colocando elas em arrays
console.log(text.split(" "))