class Dados{
  Usuario;
  Nickname;
  Senha;
  Email;

  constructor(Informações){
    this.Usuario = Informações.User
    this.Nickname = Informações.Nickname
    this.Senha = Informações.Password
    this.Email = Informações.Email
  }
}

let usuarios = []

export function GuardarInformações(Info){
  const NovaUsuario = new Dados(Info)
  usuarios.push(NovaUsuario)
  SalvarData(usuarios)
}

function SalvarData(Dados){
  localStorage.setItem('Usuarios' , JSON.stringify(Dados))
}

export function PegarData(){
  const dados = localStorage.getItem('Usuarios')
  return dados ? JSON.parse(dados) : []
}