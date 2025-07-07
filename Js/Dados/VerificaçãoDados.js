import {GuardarInformações} from "./InformaçõesUser.js";
import {VerificarSenha, SenhasIguais} from "../Scripts/VerificaçãoSenha.js";
import {EmailEhValido, UsuarioLiberado, EmailIgual, NomeLiberado} from "../Scripts/VerificaçãoUsuario.js";

function GuardarUsuario(){
  const form = document.querySelector('form')
  console.log('Teste 1')
  if (!form.dataset.handlerAttached) {
    console.log('Teste 2')
    form.addEventListener('submit', HandleSubmit(event))
    form.dataset.handlerAttached = "true"
  }
}

function HandleSubmit(e){
    e.preventDefault()
    console.log('Teste 3')

    const Valores = {
      User: document.querySelector("#newuser").value.trim(),
      Name: document.querySelector("#newname").value.trim(),
      Email: document.querySelector("#newemail").value.trim(),
      Pass: document.querySelector("#newpassword").value.trim(),
      RepeatEmail: document.querySelector("#repeatemail").value.trim(),
      RepeatPass: document.querySelector("#repeatpassword").value.trim()
    }

    const Visual = {
      RepeatP: document.querySelector("#repeatpassword"),
      RepeatE: document.querySelector("#repeatemail")
    }

    let HouveErro = false

    const error = document.querySelector('.Error')
    error.innerHTML = ""
    Visual.RepeatE.classList.remove('ErrorRepeat')
    Visual.RepeatP.classList.remove('ErrorRepeat')

    /*Se existe outra verificação de erros, para qual motivação existe as verificações abaixo? Segurança! Enquanto programava essa simples tela de login me dei de cara com um bug, em que algumas medidas de segurança poderiam falar. Para isso as medidas abaixo*/

    for (const field of Object.values(Valores)) {
      if (!field) {
        MostrarErro('Preencha todos os campos', null, error)
        HouveErro = true
        break
      }
    } 
    
    if (Valores.Email !== Valores.RepeatEmail) {
      MostrarErro('Os e-mails não coincidem', Visual.RepeatE, error)
      Visual.RepeatE.focus()
      HouveErro = true
    } 
    
    if (Valores.Pass !== Valores.RepeatPass) {
      MostrarErro('As senhas não coincidem', Visual.RepeatP, error)
      Visual.RepeatP.focus()
      HouveErro = true
    }

    if (!HouveErro ) {
      const Usuario = {
        User: Valores.User,
        Nickname: Valores.Name,
        Password: Valores.Pass,
        Email: Valores.Email
      }
      GuardarInformações(Usuario)
      location.reload()
  }
}

function MostrarErro(mensagem, campo, error){
  error.innerHTML += mensagem + "<br>"
  if (campo) campo.classList.add('ErrorRepeat')
}

export function ExecuçãoRegistro(){
  const Senha = document.querySelector('#newpassword')
  const SenhaRepeat = document.querySelector('#repeatpassword')
  const Email = document.querySelector('#newemail')
  const EmailRepeat = document.querySelector('#repeatemail')
  const Usuario = document.querySelector('#newuser')
  const Exibicao = document.querySelector('#newname')
  
  Usuario.addEventListener('blur', () => {
    UsuarioLiberado(Usuario.value)
  })
  
  Exibicao.addEventListener('blur', () => {
    NomeLiberado(Exibicao.value)
  })
  
  Email.addEventListener('blur', () => {
    EmailEhValido(Email.value, "#EmailCadastrado")
  })
  
  EmailRepeat.addEventListener('blur', () => {
    EmailIgual(Email.value, EmailRepeat.value)
  })

  Senha.addEventListener('input', () => {
    VerificarSenha(Senha.value)
  })

  SenhaRepeat.addEventListener('input', () => {
    SenhasIguais(Senha.value, SenhaRepeat.value)
  })

  document.querySelector('.btn-registrar').addEventListener('click', (event) => {
    event.preventDefault()
    if (VerificarErros()) {
      GuardarUsuario()
    } else {
      const DivErro = document.querySelector('.Error')
      DivErro.textContent = 'Verifique as informações inseridas no registro'
      setInterval(() => {
        DivErro.textContent = ''
      }, 10000);
    }
  }
)
}


function VerificarErros(){
  const Senha = document.querySelector('#newpassword').value
  const SenhaRepeat = document.querySelector('#repeatpassword').value
  const Email = document.querySelector('#newemail').value
  const EmailRepeat = document.querySelector('#repeatemail').value
  const Usuario = document.querySelector('#newuser').value
  const Exibicao = document.querySelector('#newname').value

  const TesteUsuario = UsuarioLiberado(Usuario)
  const TesteSenha = VerificarSenha(Senha)
  const TesteNick = NomeLiberado(Exibicao)
  const TesteSenhas = SenhasIguais(Senha, SenhaRepeat)
  const TesteEmail = EmailEhValido(Email, "#EmailCadastrado")
  const TesteEmails = EmailIgual(Email, EmailRepeat)

  console.log(TesteSenha, TesteUsuario, TesteNick, TesteSenhas, TesteEmail, TesteEmails)
  console.log(TesteSenha && TesteUsuario && TesteNick && TesteSenhas && TesteEmail && TesteEmails)
  return TesteSenha && TesteUsuario && TesteNick && TesteSenhas && TesteEmail && TesteEmails
}

