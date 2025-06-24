import {PegarData} from "../Dados/InformaçõesUser.js";
import {VerificarSenha, SenhasIguais} from "./VerificaçãoSenha.js";
import {HTML} from "./Templates.js";
import {GuardarUsuario} from "../Dados/VerificaçãoDados.js";
import {EmailEhValido, UsuarioLiberado} from "./VerificaçãoUsuario.js";


export function RunLogin(){
  InserirHTML('Login')
  AdicionarEventosLogin()
  MostrarSenha('.MostrarSenha')
  ValidarLogin()
}

const DivPass = document.querySelector('.Window')

function AdicionarEventosLogin() {
  document.querySelector('.Opcão-Registrar')?.addEventListener('click', () => {
    InserirHTML('Registrar')
    AdicionarEventosRegistrar()
    MostrarSenha('.MostrarSenhas')
  })

  document.querySelector('.Opcão-Esqueci')?.addEventListener('click', () => {
    InserirHTML('Recuperar')
  })
}

function AdicionarEventosRegistrar() {
  DivPass.classList.remove('Login')
  DivPass.classList.add('Recuperar')
  GuardarUsuario()

  const Senha = document.querySelector('#newpassword')
  const SenhaRepeat = document.querySelector('#repeatpassword')
  const Email = document.querySelector('#newemail')
  const Usuario = document.querySelector('#newuser')

  Usuario.addEventListener('input', () => {
    UsuarioLiberado(Usuario.value)
  })

  Email.addEventListener('input', () => {
    EmailEhValido(Email.value)
  })

  SenhaRepeat.addEventListener('input', () => {
    SenhasIguais(Senha.value, SenhaRepeat.value)
  })
  Senha.addEventListener('input', () => {
    VerificarSenha(Senha.value)
  })

  document.querySelector('.Opcão-Login')?.addEventListener('click', () => {
    InserirHTML('Login')
    AdicionarEventosLogin()
  })

  document.querySelector('.Opcão-Esqueci')?.addEventListener('click', () => {
    InserirHTML('Recuperar')
  })

}

function InserirHTML(Key) {
  const div = document.createElement('div')
  div.innerHTML = HTML[Key]
  DivPass.innerHTML = ''
  DivPass.appendChild(div)
  setTimeout(() => {
  const primeiroInput = document.querySelector('.Window input')
  if (primeiroInput) primeiroInput.focus()
  }, 0)
}

function MostrarSenha(Key){
  const Password = document.querySelectorAll(Key)
  Password.forEach(button => {
    button.addEventListener('click', () => {
      const input = document.querySelector(button.dataset.target);
      if (input) {
        const visivel = input.type === 'text';
        input.type = visivel ? 'password' : 'text';
      }
  })
  })
}

function ValidarLogin(){
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()

    const username = document.querySelector('#username').value
    const password = document.querySelector('#password').value

    const UsuariosRegistrados = PegarData()
    const userValido = UsuariosRegistrados.find(user => user.Usuario === username && user.Senha === password)

    if (userValido) {
      console.log("Usuario encontrado")
    } else {
      console.log('Usuario Não encontrado')
    }
  }
)
}