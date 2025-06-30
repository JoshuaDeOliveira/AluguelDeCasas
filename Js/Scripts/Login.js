import {PegarData} from "../Dados/InformaçõesUser.js";
import {VerificarSenha, SenhasIguais} from "./VerificaçãoSenha.js";
import {HTML} from "./Templates.js";
import {GuardarUsuario} from "../Dados/VerificaçãoDados.js";
import {EmailEhValido, UsuarioLiberado, EmailIgual} from "./VerificaçãoUsuario.js";

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
    AdicionarEventosRecuperar()
  })
}

function AdicionarEventosRegistrar() {
  DivPass.classList.remove('Login')
  DivPass.classList.add('Registrar')
  GuardarUsuario()

  const Senha = document.querySelector('#newpassword')
  const SenhaRepeat = document.querySelector('#repeatpassword')
  const Email = document.querySelector('#newemail')
  const EmailRepeat = document.querySelector('#repeatemail')
  const Usuario = document.querySelector('#newuser')

  Usuario.addEventListener('blur', () => {
    UsuarioLiberado(Usuario)
  })

  Email.addEventListener('blur', () => {
    EmailEhValido(Email.value, "#EmailCadastrado")
  })

  EmailRepeat.addEventListener('blur', () => {
    EmailIgual(Email.value, EmailRepeat.value)
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
    AdicionarEventosRecuperar()
  })

}

function AdicionarEventosRecuperar(){
  DivPass.classList.remove('Login')
  DivPass.classList.add('Registrar')

  document.querySelector(".btn-recuperar").addEventListener('click', () => {
    const OpçãoEscolhida = document.querySelector('.OpcaoRecuperacao:checked')

    const Usuario = document.querySelector('.Usuario-js').value
    console.log(Usuario, OpçãoEscolhida.value)
  })
}

function InserirHTML(Key) {
  const div = document.createElement('div')
  div.classList.add('Ajustes')
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
    const Error = document.querySelector('.Error')

    const UsuariosRegistrados = PegarData()
    const userValido = UsuariosRegistrados.find(user => user.Usuario === username && user.Senha === password)

    if (userValido) {
      Error.style.color = 'green'
      window.location.href = 'Login efetuado com sucesso!'
    } else {
      Error.innerHTML = 'Usuario ou Senha incorretos'
    }
  }
)
}