import geraSenha from "./geradores"; //Fazendo a importação da função

//Pegando as class do Html
const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaracteres = document.querySelector('.qtd-caracteres')
const checkMaiusculas = document.querySelector('.chk-maiusculas')
const checkMinisculas = document.querySelector('.chk-minusculas')
const numeros = document.querySelector('.chk-numeros')
const simbolos = document.querySelector('.chk-simbolos')
const gerarSenha = document.querySelector('.gerar-senha')



export default () => {
    //Pegando o evento de click no buttom
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
}

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        checkMaiusculas.checked,
        checkMinisculas.checked,
        numeros.checked,
        simbolos.checked
    )

    return senha || 'Nada Selecionado'
}