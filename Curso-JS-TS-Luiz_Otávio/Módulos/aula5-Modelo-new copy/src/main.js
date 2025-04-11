import GeraCpf from './modules/GeraCpf' //Importando o arquivo Js


import './assets/css/style.css' //Importando o Css

//Uma função que inicia imediatamente como visto em aulas passadas
(function(){
    const gera = new GeraCpf()
    const cpfGerado = document.querySelector('.cpf-gerado')
    cpfGerado.innerHTML = gera.geraNovoCpf()
})