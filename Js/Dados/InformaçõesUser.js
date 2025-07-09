class Dados{
  Usuario;
  Nickname;
  Senha;
  Email;
  Pergunta;
  Resposta;

  constructor(Informações){
    this.Usuario = Informações.User
    this.Nickname = Informações.Nickname
    this.Senha = Informações.Password
    this.Email = Informações.Email
    this.Pergunta = Informações.Pergunta
    this.Resposta = Informações.Resposta
  }
}

let usuarios = PegarData() || []

export function GuardarInformações(Info){
  const NovaUsuario = new Dados(Info)
  usuarios.push(NovaUsuario)
  SalvarData(usuarios)
}

export function SalvarData(Dados){
  localStorage.setItem('Usuarios' , JSON.stringify(Dados))
}

export function PegarData(){
  const dados = localStorage.getItem('Usuarios')
  return dados ? JSON.parse(dados) : []
}