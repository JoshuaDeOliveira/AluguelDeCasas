export const HTML = {  
  Login: `
    <h1 class="Titulo">Login</h1>
      <form>
        <div class="Insira-Dados">

          <div class="Entrar">
            <label class="Titulos" for="username">Usuário</label>
            <input type="text" name="username" id="username" class="Inserir" autocomplete="username" placeholder="Insira o seu nome de usuário">
          </div>

          <div class="Entrar">
            <label class="Titulos" for="password" autocapitalize="password">Senha</label>
            <input type="password" name="password" id="password" class="Inserir Senha" placeholder="Insira a sua senha" minlength="6" maxlength="18" autocomplete="current-password">

            <span class="MostrarSenha" data-target="#password">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>
        </div>

        <div class="Error">
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
          <div class="MensagemVerificação" id="UsuarioCadastrado"> 
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newname">Nome de Exibição</label>
            <input class="InserirAlternativo" id="newname" type="name" maxlength="24" placeholder="Digite seu Nome de Exibição">
          </div>
          <div class="MensagemVerificação" id="NomeCadastrado"> 
          </div>

          <div class="DadosRegistro">
            <label class="TitulosAlternativo" for="newemail">Email</label>
            <input class="InserirAlternativo" id="newemail" type="email" autocomplete="email" placeholder="Insira seu Email">
            <div id="EmailCadastrado">
            </div>

            <label class="TitulosAlternativo" for="repeatemail">Email Novamente</label>
            <input class="InserirAlternativo" id="repeatemail" type="email" autocomplete="email" placeholder="Repita seu Email">
            <div id="EmailRepetido">
            </div>
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
          <button class="btn-enviar btn-registrar">Enviar</button>
        </div>
        </div>
      </form>
      `,
  Recuperar: `
      <h1 class="TituloRecuperação">Recuperação de Senha</h1>
      <div>
        <p class="Instrucao">Informe o seu nome de utilizador e escolha o método que prefere para recuperar o acesso</p>
        <div class="UserAccount">
          <label class="Titulos" for="recovery-email">Email do Utilizador</label>
          <input class="Inserir Email-js" type="email" autocomplete="email" placeholder="Digite o Email">
          <div class="Error">
          </div>
        </div>

        <h3>Escolha um método de recuperação</h3>     
        <div class="QualMetodo">
          <input type="radio" name="RecuperaçãoOpção" id="Recuperação-Codigo" value='Codigo' class="OpcaoRecuperacao">
          <label class="Indicador" for="Recuperação-Codigo"><i class="far fa-envelope" aria-hidden="true"></i> Código enviado pelo email</label>
        </div>
        <div class="QualMetodo">
          <input type="radio" name="RecuperaçãoOpção" id="Recuperação-Pergunta" value='Pergunta' class="OpcaoRecuperacao" checked>
          <label class="Indicador" for="Recuperação-Pergunta"><i class="fas fa-lock" aria-hidden="true"></i> Pergunta de Segurança</label>
         </div>
      </div>
      <div class="btn">
        <button class="btn-enviar btn-recuperar">Recuperar Conta</button>
      </div>
    `,
  RecuperarCodigo: `<h1>Recuperação por Codigo</h1>
  `,
  RecuperarPergunta: `<h1>Recuperação por Pergunta de Segurança</h1>`,
} 