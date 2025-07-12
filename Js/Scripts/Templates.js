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

          <div class="DadosRegistro">
            <p class="RespostaSegurança">Pergunta de Segurança</p>
            <div>
              <select id="OpçõesSegurança" class="Escondido Opções-js OpçõesSegurança">
                <option value="O nome do seu pet?">O nome do seu pet?</option>
                <option value="O nome da sua mae?">O nome da sua mae?</option>
                <option value="Sua cor favorita?">Sua cor favorita?</option>
                <option value="Seu jogo favorito?">Seu jogo favorito?</option>
                <option value="Seu filme Favorito??">Seu filme Favorito?</option>
              </select>
              <label for="responseSegurity" id="PerguntaSe">O nome do seu pet?</label>
              <span class="Opções Opção-Segurança">Select</span>
            </div>
            <input class="InserirAlternativo" id="responseSegurity" type="text" placeholder="Responda a Pergunta de Segurança">
            <div id="EmailCadastrado">
            </div>
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
  RecuperarCodigo: `
      <div>
        <h1 class="TituloRecuperação">Recuperação por Codigo</h1>
        <p class="ExplicaçãoCodigo">Insira o codigo enviado ao email do Usuario</p>
      </div>
      <div class="DadosRegistro">
        <label for="Codigo-Segurança" class="CodigoSegurança">Codigo de Segurança</label>
        <input class="Inserir" id="Codigo_Segurança" type="text" placeholder="Insira o Codigo"></input>
      </div>

      <div class="Error">
      </div>

      <div class="Opções-Login">
          <button class="Opções Opcão-Reenviar">Reenviar Codigo</button>
        </div>
      <div class="btn">
        <button class="btn-enviar btn-codigo">Enviar Codigo</button>
      </div>
  `,
  RecuperarPergunta: `
      <h1 class="TituloRecuperação">Recuperação por Pergunta de Segurança</h1>
      <p class="Explicação">Insira abaixo a resposta da pergunta de segurança escolhida pelo usuario</p>
      <div>
        <div class="DadosRegistro">
          <label for="Pergunta-Segurança" class="PerguntaSegurança"></label>
          <input class="Inserir" id="Pergunta_Segurança" type="text" placeholder="Resposta da Pergunta de Segurança"></input>
          <div class="Error">
          </div>
        </div>
        <div class="btn">
          <button class="btn-enviar btn-resposta">Enviar Resposta</button>
        </div>
      </div>
  `,
  Senha: `
  <h1 class="Titulo">Modificação Senha</h1>
        <div class="Insira-Dados">

          <div class="Entrar">
            <label class="Titulos" for="newpassword">
              Nova Senha
            </label>
            <input type="password" name="password" id="newpassword" class="Inserir" placeholder="Insira a sua nova senha" minlength="6" maxlength="18">
            <div class="tooltiptext">
              A senha deve conter: <span class="temMaiuscula">1 maiúscula</span>, <span class='temMinuscula'>1 minúscula</span>, <span class="temNumero">1 número</span>, <span class="temEspecial">1 caractere especial</span>
            </div>

            <span class="MostrarSenhasNovas" data-target="#newpassword">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>

          <div class="Entrar">
            <label class="Titulos" for="repeatpassword">
              Nova Senha Novamente
            </label>
            <input type="password" name="password" id="repeatpassword" class="Inserir" placeholder="Repita a sua nova senha" minlength="6" maxlength="18" autocomplete="new-password">
            <div class="tooltiptext">
              <span class="senhacorreta">A senha deve ser igual a digitada anteriormente, seguindo as mesmas caracteristicas da senha anterior</span>
            </div>

            <span class="MostrarSenhasNovas" data-target="#repeatpassword">
              <img src="./CSS/Imagens/eye-icon-1457.png" alt="">
            </span>
          </div>
        </div>

        <div class="Error">
        </div>

        <div class="btn">
          <button class="btn-enviar btn-modificar">Modificar Senha</button>
        </div>
  `
} 