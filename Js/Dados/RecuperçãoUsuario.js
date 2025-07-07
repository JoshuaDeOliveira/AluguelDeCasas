import {PegarData} from "../Dados/InformaçõesUser.js";
import {InserirHTML} from "../Scripts/Login.js";

export function ValidaçãoEmail(){
  const Email = document.querySelector('.Email-js')
  const EmailDigitado = Email.value
  if (EmailEstaCorreto(EmailDigitado)) {
    return ProcurarEmail(Email)
  }
}

function EmailEstaCorreto(Email){
  const padraoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (Email === '' || Email === null || Email === undefined) {
   return false 
  }
  if (padraoEmail.test(Email) && Email.includes('@') && Email.includes('.')) {
    return true
  } else {
    document.querySelector('.Error').textContent = 'Email esta digitado incorretamente'
    return false 
  }
}

function ProcurarEmail(Email){
  const Informações = PegarData()
  const ErrorDiv = document.querySelector('.Error')
  const EmailEncontrado = Informações.some(Info => Info.Email === Email.value)
  if (!EmailEncontrado) {
    Email.classList.add('Errador')
    ErrorDiv.textContent = 'Email não encontrado. Por favor digite o Email de um usuario registrado' 
    return false 
  } else {
    Email.classList.remove('Errador')
    ErrorDiv.textContent = ''
    return true 
  }
}

export function ExecuçãoRecuperar(Email, Opção){
  switch (Opção) {
    case 'Pergunta':
      InserirHTML('RecuperarPergunta')
      break;
    case 'Codigo':
      InserirHTML('RecuperarCodigo')
      break;
    default:
      console.log('Nenhuma opção escolhida')
      break;
  }
}