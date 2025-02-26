//Revisão básica de arrays

const names = ['Jhonatan','Pedro','Guilherme']

//pop remove do fim do array
//shift também remove só que do início do array
//unshfit também adiciona ao início
//push adiciona ao fim do array


names[3] = 'Ana'
names.push('Raul')

//Tem como se converter uma string em array
const nome = 'Jhonatan Fagundes Costa'
const nomes = nome.split(' ')
console.log(nomes)

//Convertendo uma string para array
const nomeF = ['Vitória', 'Ferreira', 'Santos']
const nomesF = nomeF.join(' ')
console.log(nomesF)


