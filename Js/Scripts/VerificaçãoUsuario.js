import {PegarData} from "../Dados/InformaçõesUser.js";

export function EmailEhValido(Email, KeyDiv) {
  const Informações = PegarData();
  const EmailExistente = Informações.some(Info => Info.Email === Email);
  const EmailDiv = document.querySelector(KeyDiv)
  const padraoEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  EmailDiv.style.display = 'block'
  if (Email == '') {
    EmailDiv.innerHTML = ''
    return false
  }
  if (!padraoEmail.test(Email) || !Email.includes("@") || !Email.includes(".")){
    EmailDiv.style.color = '#f34242'
    EmailDiv.innerHTML = 'Email esta digitado incorretamente'
    return false
  } 
  if (EmailExistente) {
    EmailDiv.style.color = '#38aa03'
    EmailDiv.innerHTML = 'Email Cadastrado!'
    return false
  }
  EmailDiv.style.color = '#38aa03'
  EmailDiv.innerHTML = 'Email esta disponivel!'
  return true
}

export function UsuarioLiberado(Usuario){ 
  const Informações = PegarData();
  const User = document.querySelector("#UsuarioCadastrado")

   if (!Usuario.trim()) {
    User.style.display = 'none'
    return false;
  }

  const usuarioExiste = Informações.some(Info => Info.Usuario === Usuario);

  const mensagem = usuarioExiste
    ? 'Usuário já registrado, escolha outro usuario'
    : 'Usuário está liberado';
  const color = usuarioExiste ? '#eb2424' : '#63eb24'
  const Deu = usuarioExiste ? false : true

  User.textContent = mensagem;
  User.style.color = color
  User.style.display = 'block'
  return Deu
}

export function NomeLiberado(Name){
  const Informações = PegarData()
  const ExisteName = Informações.some(Info => Info.Nickname === Name)
  const Nome = document.querySelector("#NomeCadastrado")

  if (!Name.trim()) {
    Nome.style.display = 'none'
    return false 
  }

  const mensagem = ExisteName ? 'Nome ja foi cadastrado por outro usuario' : 'Nome liberado para uso!'
  const color = ExisteName ? '#eb2424' : '#63eb24'
  const Deu = ExisteName ? false : true 

  Nome.textContent = mensagem;
  Nome.style.color = color
  Nome.style.display = 'block'
  return Deu
}