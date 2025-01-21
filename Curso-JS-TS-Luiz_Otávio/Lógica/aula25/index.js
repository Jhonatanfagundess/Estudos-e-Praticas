//try,catch e finally
//Primeira parte executa quando não a erros - try   
//segunda é executada quando tem erros - catch
//E o último executado sempre - finally

try{

    try{
        //Podemos colocar mais blocos de código 
    }catch(erro){

    }

    //Cuidado com a indentação pois código dentro de código
    //Não é uma boa prática

}catch(err){
    //Trativa de erro
}finally{
    //Executa sempre, dando erro ou não
}

function retornaHora(data){
    if(data && !(data instanceof Date)){
       throw new TypeError('Esperando uma instância de Date')
    }

    if(!data){
        data = new Date()
    
    }

    return data.toLocaleTimeString('pt-BR',{
        hour12:false
    })

    }

try{
    const data = new Date('01-01-1970 12:10:12')
    const hora = retornaHora()
    console.log(hora)
}catch(err){
    //tratando erro
}finally{
    console.log('Código finalizado')
}


