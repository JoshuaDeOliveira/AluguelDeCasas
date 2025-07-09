import {PegarData, SalvarData} from "../Dados/InformaçõesUser.js";
import {InserirHTML, MostrarSenha} from "../Scripts/Login.js";
import {VerificarSenha, SenhasIguais} from "../Scripts/VerificaçãoSenha.js";
import {EnviarCodigo, Codigo} from "../Dados/RecuperçãoUsuario.js";

export function RespostaCerta(Usuario){
  let cont = 4
  document.querySelector('.btn-resposta').addEventListener('click', () => {
    const ResUsu = document.querySelector('#Pergunta_Segurança').value
    const ErrorDiv = document.querySelector('.Error')
    if (Usuario.Resposta === ResUsu) {
      InserirHTML('Senha')
      ExecuçãoNovaSenha(Usuario)
    } else {
      cont--
      ErrorDiv.textContent = `Resposta Errada, por favor insira a resposta da Pergunta de Segurança cadastrada no registro (${cont} Tentativas)`
      if (cont < 1) {
      location.reload();
    }
    }
  })
}

function VerificarNovaSenha(SenhaNova, DadosUsuario){
  const Informações = PegarData()
  const LocaUsu = Informações.findIndex(u => u.Email === DadosUsuario.Email)

  const ErrorDiv = document.querySelector('.Error')
  if (SenhaNova === DadosUsuario.Senha) {
    ErrorDiv.textContent = 'A Senha não pode ser igual a antiga'
  } else {
    Informações[LocaUsu] = {
      ...Informações[LocaUsu],
      Senha: SenhaNova
    };
    SalvarData(Informações)
    location.reload();
  }
}

function ExecuçãoNovaSenha(DadosUsuario){
  MostrarSenha('.MostrarSenhasNovas')

  const Senha = document.querySelector('#newpassword')
  const RepeatSenha = document.querySelector('#repeatpassword')
  const btn = document.querySelector('.btn-modificar')
  let Erros = false

  Senha.addEventListener('input', () => {
    Erros = VerificarSenha(Senha.value)
  })

  RepeatSenha.addEventListener('input', () => {
    Erros = SenhasIguais(Senha.value, RepeatSenha.value)
  })

  btn.addEventListener('click', () => {
    if (Erros) {
      VerificarNovaSenha(Senha.value, DadosUsuario)
    }
  })
}

export function ExecuçãoCodigo(User){
  let CodigoSegurança = Codigo()
  EnviarCodigo(User.Email, CodigoSegurança)
  const btn = document.querySelector('.btn-codigo')
  const btnreenviar = document.querySelector('.Opcão-Reenviar')

  btn.addEventListener('click', () => {
    const CodigoDigitado = document.querySelector('#Codigo_Segurança').value.trim()

    if (CodigoDigitado === "") {
      document.querySelector('.Error').textContent = 'Por favor, digite o código recebido no e-mail.'
      return
    }


    if(VerificarCodigo(CodigoSegurança, CodigoDigitado)){
      InserirHTML('Senha')
    } else {
      document.querySelector('.Error').textContent = 'O Codigo digitado esta incorreto. Aperte ReenviarCodigo ou tente inserir novamente'
    }
  })

  btnreenviar.addEventListener('click', () => {
    btnreenviar.disabled = true
    const ErrorDiv = document.querySelector('.Error')

    CodigoSegurança = Codigo()
    EnviarCodigo(User.Email, CodigoSegurança)
    ErrorDiv.style.color = 'green'
    ErrorDiv.textContent = 'Um novo codigo foi enviado ao seu email!'

    let cont = 30
    const Contar = setInterval(() => {
    if (cont > 0) {
      cont--
      ErrorDiv.textContent = `Aguarde ${cont} segundos para tentar enviar novamente`
    } else {
      clearInterval(Contar)
      ErrorDiv.textContent = ''
      ErrorDiv.style.color = 'red'
      btnreenviar.disabled = false
      }
    }, 1000);
  })
}

function VerificarCodigo(CodigoOriginal, CodigoDigitado){
  if (CodigoOriginal === CodigoDigitado) {
    return true
  } else {
    return false 
  }
}