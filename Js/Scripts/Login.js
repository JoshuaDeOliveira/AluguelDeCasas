import {PegarData} from "../Dados/InformaçõesUser.js";

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
  <div class="Error">
  </div>
      <form>
        <div class="Insira-Dados">
          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="username">Usuario</label>
            <input class="InserirAlternativo" id="newuser" type="name" maxlength="24" placeholder="Digite seu Usuario">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="viewername">Nome de Exibição</label>
            <input class="InserirAlternativo" id="newname" type="name" maxlength="24" placeholder="Digite seu Nome de Exibição">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="email">Email</label>
            <input class="InserirAlternativo" id="newemail" type="email" autocomplete="email" placeholder="Insira seu Email">

            <label class="TitulosAlternativo" for="repeatemail">Email Novamente</label>
            <input class="InserirAlternativo" id="repeatemail" type="email" autocomplete="email" placeholder="Repita seu Email">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="password">
              Senha
            </label>
            <input type="password" name="password" id="newpassword" class="InserirAlternativo" placeholder="Insira a sua senha" minlength="6" maxlength="18" autocomplete="new-password">

            <span class="MostrarSenhas" data-target="#newpassword">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="password">
              Senha Novamente
            </label>
            <input type="password" name="password" id="repeatpassword" class="InserirAlternativo" placeholder="Repita a sua senha" minlength="6" maxlength="18" autocomplete="new-password">

            <span class="MostrarSenhas" data-target="#repeatpassword">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>

          <div class="Opções-Login">
          <span class="Opções Opcão-Login">Login</span>
          <span class="Opções Opcão-Esqueci">Esqueci a Senha</span>
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
  document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault()

    const error = document.querySelector('.Error')
    const newUsername = document.querySelector("#newuser").value
    const newName = document.querySelector("#newname").value
    const newEmail = document.querySelector("#newemail").value
    const RepeatEmail = document.querySelector("#repeatemail").value
    const newPass = document.querySelector("#newpassword").value
    const RepeatPass = document.querySelector("#repeatpassword").value

    if (!newUsername.trim() || !newName || !newEmail.trim() || 
    !newPass || !RepeatEmail || !RepeatPass) {
      error.innerHTML = 'Preencha todos os dados'
    } else if (newEmail.trim() !== RepeatEmail.trim()) {
      error.innerHTML = 'Os Emails não concidem'
    } else if (newPass !== RepeatPass) {
      error.innerHTML = 'As Senhas não concidem'
    } else {
      const Usuario = {
        User: newUsername,
        NameExibição: newName,
        Password: newPass,
        Email: newEmail
      }
      console.log(Usuario) 
    }
  })
}