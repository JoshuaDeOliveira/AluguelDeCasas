import {PegarData} from "../Dados/InformaçõesUser.js";

export function EmailEhValido(email) {
  const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (padraoEmail.test(email)) {
    document.querySelector("#EmailCadastrado").style.display = 'block'
  } else if (!padraoEmail.test(email)){
    document.querySelector("#EmailCadastrado").style.display = 'none'
  }
}

export function UsuarioLiberado(Usuario){
  const Informações = PegarData()
  const usuarioExiste = Informações.some(Info => Info.Usuario === Usuario);

  document.querySelector("#UsuarioCadastrado").style.display = usuarioExiste ? 'none' : 'block';
}
