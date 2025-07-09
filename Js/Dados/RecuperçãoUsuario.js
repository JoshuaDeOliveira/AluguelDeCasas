import {PegarData} from "../Dados/InformaçõesUser.js";
import {InserirHTML} from "../Scripts/Login.js";
import {RespostaCerta, ExecuçãoCodigo} from "../Scripts/VerificaçãoRecuperação.js";

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
  const Informações = PegarData()
  const UsuarioEncontrado = Informações.find(Info => Info.Email === Email)

  switch (Opção) {
    case 'Pergunta':
      InserirHTML('RecuperarPergunta')
      document.querySelector('.PerguntaSegurança').textContent =  UsuarioEncontrado.Pergunta
      RespostaCerta(UsuarioEncontrado)
      break;
    case 'Codigo':
      InserirHTML('RecuperarCodigo')
      ExecuçãoCodigo(UsuarioEncontrado)
      break;
    default:
      console.log('Nenhuma opção escolhida')
      break;
  }

  const Window = document.querySelector('.Window')
  const Ajustes = document.querySelector('.Ajustes')

  Window.style.minHeight = '300px'
  Ajustes.style.minHeight = '300px'
}

export function EnviarCodigo(EmailDestino, CodigoSegurança){
  const TemplateParametro = {
    email: EmailDestino,
    codigo: CodigoSegurança
  }

  emailjs.send('service_u39lu6x', 'template_ey5mc8i', TemplateParametro)
    .then((response) => {
      console.log('Email enviado com sucesso!', response.status, response.text)
    })
    .catch((error) => {
      console.log('Falha em enviar o Email', error) 
    })
}

export function Codigo(){
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let codigo = '';
  const tamanho = 7
  for (let i = 0; i < tamanho; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    codigo += caracteres.charAt(indiceAleatorio);
  }
  return codigo;
}
