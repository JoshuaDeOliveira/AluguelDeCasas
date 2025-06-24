export const HTML = {  
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
          <div class="tooltiptext" id="UsuarioCadastrado">
            Usuario liberado 
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newname">Nome de Exibição</label>
            <input class="InserirAlternativo" id="newname" type="name" maxlength="24" placeholder="Digite seu Nome de Exibição">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newemail">Email</label>
            <input class="InserirAlternativo" id="newemail" type="email" autocomplete="email" placeholder="Insira seu Email">
            <div id="EmailCadastrado">
              Email validado!
            </div>

            <label class="TitulosAlternativo" for="repeatemail">Email Novamente</label>
            <input class="InserirAlternativo" id="repeatemail" type="email" autocomplete="email" placeholder="Repita seu Email">
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newpassword">
              Senha
            </label>
            <input type="password" name="password" id="newpassword" class="InserirAlternativo" placeholder="Insira a sua senha" minlength="6" maxlength="18" >
            <div class="tooltiptext">
              A senha deve conter: <span class="temMaiuscula">1 maiúscula</span>, <span class='temMinuscula'>1 minúscula</span>, <span class="temNumero">1 número</span>, <span class="temEspecial">1 caractere especial</span>
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
              <span class="senhacorreta">A senha deve ser igual a digitada anteriormente, seguindo as mesmas caracteristicas da senha anterior</span>
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