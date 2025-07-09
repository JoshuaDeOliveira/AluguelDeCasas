import {GuardarInformações} from "./InformaçõesUser.js";
import {VerificarSenha, SenhasIguais} from "../Scripts/VerificaçãoSenha.js";
import {EmailEhValido, UsuarioLiberado , NomeLiberado} from "../Scripts/VerificaçãoUsuario.js";

function GuardarUsuario(){
  const form = document.querySelector('form')
  if (!form.dataset.handlerAttached) {
    form.addEventListener('submit', HandleSubmit(event))
    form.dataset.handlerAttached = "true"
  }
}

function HandleSubmit(e){
    e.preventDefault()

    const Valores = {
      User: document.querySelector("#newuser").value.trim(),
      Name: document.querySelector("#newname").value.trim(),
      Email: document.querySelector("#newemail").value.trim(),
      Pass: document.querySelector("#newpassword").value.trim(),
      RepeatPass: document.querySelector("#repeatpassword").value.trim(),
      Resposta: document.querySelector('#responseSegurity').value.trim()
    }

    const Visual = {
      RepeatP: document.querySelector("#repeatpassword"),
      Pergunta: document.querySelector("#PerguntaSe").textContent
    }

    let HouveErro = false

    const error = document.querySelector('.Error')
    error.innerHTML = ""
    Visual.RepeatP.classList.remove('ErrorRepeat')

    /*Se existe outra verificação de erros, para qual motivação existe as verificações abaixo? Segurança! Enquanto programava essa simples tela de login me dei de cara com um bug, em que algumas medidas de segurança poderiam falar. Para isso as medidas abaixo*/

    for (const field of Object.values(Valores)) {
      if (!field) {
        MostrarErro('Preencha todos os campos', null, error)
        HouveErro = true
        break
      }
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
        Email: Valores.Email,
        Pergunta: Visual.Pergunta,
        Resposta: Valores.Resposta
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
  
  Senha.addEventListener('input', () => {
    VerificarSenha(Senha.value)
  })

  SenhaRepeat.addEventListener('input', () => {
    SenhasIguais(Senha.value, SenhaRepeat.value)
  })

  document.querySelector('.Opção-Segurança').addEventListener('click', () => {
    const Selecionado = document.querySelector('#PerguntaSe')
    const Opções = document.querySelector('.Opções-js')
    buttonSelect(Opções, Selecionado)
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

function buttonSelect(Opções, Frase){
  Opções.classList.toggle('Escondido');
  Frase.classList.toggle('Escondido');
  if(!Frase.classList.contains('Escondido')){
    Frase.textContent = Opções.value
  } 
}

function VerificarErros(){
  const Senha = document.querySelector('#newpassword').value
  const SenhaRepeat = document.querySelector('#repeatpassword').value
  const Email = document.querySelector('#newemail').value
  const Usuario = document.querySelector('#newuser').value
  const Exibicao = document.querySelector('#newname').value

  const TesteUsuario = UsuarioLiberado(Usuario)
  const TesteSenha = VerificarSenha(Senha)
  const TesteNick = NomeLiberado(Exibicao)
  const TesteSenhas = SenhasIguais(Senha, SenhaRepeat)
  const TesteEmail = EmailEhValido(Email, "#EmailCadastrado")

  return TesteSenha && TesteUsuario && TesteNick && TesteSenhas && TesteEmail
}

