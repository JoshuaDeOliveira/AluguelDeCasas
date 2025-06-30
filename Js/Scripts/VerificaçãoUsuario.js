import {PegarData} from "../Dados/InformaçõesUser.js";

export function EmailEhValido(Email, KeyDiv) {
  const Informações = PegarData();
  const EmailExistente = Informações.some(Info => Info.Email === Email);
  const EmailDiv = document.querySelector(KeyDiv)
  const padraoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  EmailDiv.style.display = 'block'
  if (Email == '') {
    EmailDiv.innerHTML = ''
    return 
  }
  if (!padraoEmail.test(Email) || !Email.includes("@") || !Email.includes(".")){
    EmailDiv.style.color = '#f34242'
    EmailDiv.innerHTML = 'Email esta digitado incorretamente'
    return } 
  if (EmailExistente) {
    EmailDiv.style.color = '#38aa03'
    EmailDiv.innerHTML = 'Email ja utizado!'
    return}
  EmailDiv.style.color = '#38aa03'
  EmailDiv.innerHTML = 'Email esta disponivel!'
}


export function UsuarioLiberado(Usuario){ 
  const Informações = PegarData();
  const User = document.querySelector("#UsuarioCadastrado")
  const Email = Usuario.value

   if (!Email.trim()) {
    User.style.display = 'none'
    return;
  }

  const usuarioExiste = Informações.some(Info => Info.Usuario === Email);

  const mensagem = usuarioExiste
    ? 'Usuário já registrado, escolha outro usuario'
    : 'Usuário está liberado';
  const color = usuarioExiste ? '#eb2424' : '#63eb24'

  User.innerHTML = mensagem;
  User.style.color = color
  User.style.display = 'block'
}

export function EmailIgual(Email, EmailRepeat){
  if (Email !== EmailRepeat) {
    'Os emails não coincidem, por favor verifique o email digitado'
  }
}