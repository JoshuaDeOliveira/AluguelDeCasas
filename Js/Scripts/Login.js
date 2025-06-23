import {PegarData, GuardarInformações} from "../Dados/InformaçõesUser.js";

export function RunLogin(){
  InserirHTML('Login')
  AdicionarEventosLogin()
  MostrarSenha('.MostrarSenha')
  ValidarLogin()
}

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

  document.querySelector('.Opcão-Login')?.addEventListener('click', () => {
    InserirHTML('Login')
    AdicionarEventosLogin()
  })

  document.querySelector('.Opcão-Esqueci')?.addEventListener('click', () => {
    InserirHTML('Recuperar')
  })

}

const DivPass = document.querySelector('.Window')

function InserirHTML(Key) {
  const div = document.createElement('div')
  div.innerHTML = HTML[Key]
  DivPass.innerHTML = ''
  DivPass.appendChild(div)
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

const HTML = {  
  Login: `
    <h1 class="Titulo">Login</h1>
      <form>
        <div class="Insira-Dados">

          <div class="Entrar">
            <label class="Titulos" for="username" >Usuário</label>
            <input type="text" name="username" id="username" class="Inserir" autocomplete="username" placeholder="Insira o seu nome de usuário ou email">
          </div>

          <div class="Entrar">
            <label class="Titulos" for="password" autocapitalize="password">Senha</label>
            <input type="password" name="password" id="password" class="Inserir Senha" placeholder="Insira a sua senha" minlength="6" maxlength="18" autocomplete="current-password">

            <span class="MostrarSenha" data-target="#password">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>
        </div>
        <div class="Opções-Login">
          <span class="Opções Opcão-Registrar">Registrar-se</span>
          <span class="Opções Opcão-Esqueci">Esqueci a Senha</span>
        </div>
        <div class="btn">
          <button class="btn-enviar">Enviar</button>
        </div>
      </form>
      `,
  Registrar: `
  <h1 class="Titulo">Registrar</h1>
      <form>
        <div class="Insira-Dados">
          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newuser">Usuario</label>
            <input class="InserirAlternativo" id="newuser" type="name" maxlength="24" placeholder="Digite seu Usuario">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newname">Nome de Exibição</label>
            <input class="InserirAlternativo" id="newname" type="name" maxlength="24" placeholder="Digite seu Nome de Exibição">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newemail">Email</label>
            <input class="InserirAlternativo" id="newemail" type="email" autocomplete="email" placeholder="Insira seu Email">

            <label class="TitulosAlternativo" for="repeatemail">Email Novamente</label>
            <input class="InserirAlternativo" id="repeatemail" type="email" autocomplete="email" placeholder="Repita seu Email">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newpassword">
              Senha
            </label>
            <input type="password" name="password" id="newpassword" class="InserirAlternativo" placeholder="Insira a sua senha" minlength="6" maxlength="18" autocomplete="new-password" title="A senha deve conter: 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial">
            <div class="tooltiptext">
              A senha deve conter: 1 maiúscula, 1 minúscula, 1 número, 1 caractere especial
            </div>

            <span class="MostrarSenhas" data-target="#newpassword">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="repeatpassword">
              Senha Novamente
            </label>
            <input type="password" name="password" id="repeatpassword" class="InserirAlternativo" placeholder="Repita a sua senha" minlength="6" maxlength="18" autocomplete="new-password">
            <div class="tooltiptext">
              A senha deve conter: 1 maiúscula, 1 minúscula, 1 número, 1 caractere especial
            </div>

            <span class="MostrarSenhas" data-target="#repeatpassword">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>

          <div class="Error">
          </div>

          <div class="Opções-Login">
          <span class="Opções Opcão-Login">Login</span>
          <span class="Opções Opcão-Esqueci">Esqueci a Senha</span>
          </div>
        </div>
        <div class="btn">
          <button class="btn-enviar">Enviar</button>
        </div>
        </div>
      </form>
      `,
  Recuperar: `
      <h1 class="Titulo">Recuperação de Senha</h1>
      <form>
        <div class="Entrar">
          <label class="Titulos" for="recovery-email">Email Recuperação</label>
          <input class="Inserir" type="email">
        </div>

        <div class="Entrar">
          <label class="Titulos" for="recovery-email">Codigo de Recuperação</label>
          <input class="Inserir" type="email">
        </div>

        <div class="btn">
          <button class="btn-enviar">Enviar Codigo</button>
        </div>
      </form>
    `
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

function GuardarUsuario(){
  const form = document.querySelector('form')
  if (!form.dataset.handlerAttached) {
    form.removeEventListener('submit', HandleSubmit)
    form.addEventListener('submit', HandleSubmit)
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
    } else {
      const SenhaValida = VerificarSenhaFortaleza(Valores.Pass)
      let HTML = 'A senha deve conter: '
      if (!SenhaValida.estaForte) {HTML += 'A Senha precisa ser mais forte' + ","} 
      if (!SenhaValida.temEspecial) {HTML += 'A Senha precisa de no minimo 1 Caractere especial' + ","} 
      if (!SenhaValida.temMaiuscula){HTML += 'A Senha precisa de no minimo 1 Letra maiscula' + ","} 
      if (!SenhaValida.temMinuscula) {HTML += 'A Senha precisa de no minimo 1 Letra miniscula' + ","} 
      if (!SenhaValida.temNumero) {HTML += 'A Senha precisa de no minimo 1 Numero' + ","}
      document.querySelector('.tooltiptext')
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

function VerificarSenhaFortaleza(senha){
  const temMaiuscula = /[A-Z]/.test(senha)
  const temMinuscula = /[a-z]/.test(senha)
  const temNumero = /[0-9]/.test(senha)
  const temEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha)

  return {
    temMaiuscula,
    temMinuscula,
    temNumero,
    temEspecial,
    estaForte: temMaiuscula && temMinuscula && temNumero && temEspecial
  }
}