//Objeto Date
//Uma função construtora

const tresHoras = 60 * 60 * 3 * 1000
const umDia = 60 * 60 * 24 * 1000
const data = new Date(0 + tresHoras + umDia) //Timestamp unix ou época unix 01/01/1970
console.log(data.toString())

//Se colorcamos o último valor de segundo,minuto ou hora um valor é alterado
//Ex segundos: 59 e não 60 pois altera o valor de minutos
const newData = new Date(2025, 3, 6, 6,5) //year,m,d,h,m,s - Formato
console.log(newData.toString())


const dataString = new Date(1736154892959)
console.log(dataString.toString())
console.log('Dia' , dataString.getDate())
console.log('Mês' , dataString.getMonth() + 1) //JS começa do Zero 
console.log('Ano' , dataString.getFullYear())
console.log('Hora' , dataString.getHours())
console.log('Min' , dataString.getMinutes())
console.log('Seg' , dataString.getSeconds())
console.log('Ms' , dataString.getMilliseconds())
console.log('Dia da semana' , dataString.getDay()) // 0 é domingo e 6 sabádo

console.log(Date.now()) //Pegando o valor de MS 
//Passando esse valor como parametro temos o valor da data de hoje
//Normal ter esse valor em base de dados



const datas = new Date()
const dataBrasil = formatoData(datas)
console.log(dataBrasil)

//Função para colocar o zero antes

function zeroEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formatoData(datas){
   const day = zeroEsquerda(datas.getDate())
   const mes = zeroEsquerda(datas.getMonth() + 1)
   const ano = zeroEsquerda(datas.getFullYear())
   const hora = zeroEsquerda(datas.getHours())
   const min = zeroEsquerda(datas.getMinutes())
   const seg = zeroEsquerda(datas.getSeconds())

   return `${day}/${mes}/${ano} || ${hora}:${min}:${seg}`
}