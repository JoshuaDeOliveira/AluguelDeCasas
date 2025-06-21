export function RunLogin(){
  InserirHTML('Login')
  AdicionarEventosLogin()
  MostrarSenha()

  document.querySelector('.Opcão-Registrar').addEventListener('click', () => {
    InserirHTML('Registrar')
    AdicionarEventosRegistrar()
  })

  document.querySelector('.Opcão-Esqueci').addEventListener('click', () => {
    console.log('Esqueci')
  })
}

function AdicionarEventosLogin() {
  document.querySelector('.Opcão-Registrar')?.addEventListener('click', () => {
    InserirHTML('Registrar')
    AdicionarEventosRegistrar()
  })

  document.querySelector('.Opcão-Esqueci')?.addEventListener('click', () => {
    InserirHTML('Recuperar')
    AdicionarEventosRecuperar()
  })
}

function AdicionarEventosRegistrar() {
  DivPass.classList.remove('Login')
  DivPass.classList.add('Recuperar')

  document.querySelector('.Opcão-Login')?.addEventListener('click', () => {
    InserirHTML('Login')
    AdicionarEventosLogin()
  })

  document.querySelector('.Opcão-Esqueci')?.addEventListener('click', () => {
    InserirHTML('Recuperar')
    AdicionarEventosRecuperar()
  })

}

const DivPass = document.querySelector('.Window')

function InserirHTML(Key) {
  const div = document.createElement('div')
  div.innerHTML = HTML[Key]
  DivPass.innerHTML = ''
  DivPass.appendChild(div)
}

function MostrarSenha(){
  const Password = document.querySelectorAll('.Senha')
  Password.forEach(button => {
    button.addEventListener('click', () => {
    const visivel = Password.type === 'text';
    Password.type = visivel ? 'password' : 'text';
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

            <span class="MostrarSenha">
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
  Registrar: `<h1 class="Titulo">Registrar</h1>
      <form>
        <div class="Insira-Dados">
          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="username">Usuario</label>
            <input class="InserirAlternativo" type="name" maxlength="24" placeholder="Digite seu Usuario">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="viewername">Nome de Exibição</label>
            <input class="InserirAlternativo" type="name" maxlength="24" placeholder="Digite seu Nome de Exibição">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="email">Email</label>
            <input class="InserirAlternativo" type="email" autocomplete="email" placeholder="Insira seu Email">

            <label class="TitulosAlternativo" for="repeatemail">Email Novamente</label>
            <input class="InserirAlternativo" type="email" autocomplete="email" placeholder="Repita seu Email">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="password">
              Senha
            </label>
            <input type="password" name="password" id="password1" class="InserirAlternativo" placeholder="Insira a sua senha" minlength="6" maxlength="18" autocomplete="new-password">

            <span class="MostrarSenhas">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="password">
              Senha Novamente
            </label>
            <input type="password" name="password" id="password2" class="InserirAlternativo" placeholder="Repita a sua senha" minlength="6" maxlength="18" autocomplete="new-password">

            <span class="MostrarSenhas">
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