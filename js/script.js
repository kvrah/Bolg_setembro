let nome = window.document.getElementById("#nome")
let email = document.querySelector("#email")
let mensagem = document.querySelector("#mensagem")
let nomeOK = false
let emailOk = false
let mensagemOk = false

nome.style.width = "25%"
email.style.width = "25%"



function validaNome() {
    let txtNome = document.querySelector("#txtNome")
    if (nome.value.lenght < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    }
    else{
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOK = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtEmail")
    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1){
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = "red"
    } else{
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = "green"
        emailOk = true
    }
}

function validaMensagem() {
    let txtMensagem = document.querySelector("#txtMensagem")
    if(mensagem.value.lenght >= 1000){
        txtMensagem.innerHTML = "Mensagem até 1000 caracteres"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = "block"
    } else {
        txtMensagem.style.display = "none"
        mensagemOk = true
    }
}

function enviar() {
    if(nomeOK == true && emailOk == true && mensagemOk == true){
        alert ("Formulário enviado com sucesso!")
    } else {
        alert ("Preencha todos os campos corretamente!")
    }

}
