export function RunLogin(){
  InserirHTML('Login')

  document.querySelector('.Opcão-Registrar').addEventListener('click', () => {
    InserirHTML('Registrar')
    const Login = document.querySelector('.Opcão-Login')
    Login.addEventListener('click', () => {
      InserirHTML('Login')
    })
  })

  document.querySelector('.Opcão-Esqueci').addEventListener('click', () => {
    console.log('Esqueci')
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
  const Password = document.querySelector('.Senha')

  document.querySelector('.MostrarSenha').addEventListener('click', () => {
    const visivel = Password.type === 'text';
    Password.type = visivel ? 'password' : 'text';
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
            <input class="InserirAlternativo" type="text">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="viewername">Nome de Exibição</label>
            <input class="InserirAlternativo" type="text">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="email">Email</label>
            <input class="InserirAlternativo" type="text">

            <label class="TitulosAlternativo" for="repeatemail">Email Novamente</label>
            <input class="InserirAlternativo" type="text">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="password">
              Senha
            </label>
            <input class="InserirAlternativo" type="text">

            <span class="MostrarSenhas">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="password">
              Senha Novamente
            </label>
            <input class="InserirAlternativo" type="text">

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
      `
}