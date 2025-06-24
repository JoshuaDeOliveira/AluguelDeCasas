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

export function VerificarSenha(Senha){
  const SenhaValida = VerificarSenhaFortaleza(Senha)

  const elementos = {
    temMaiuscula: document.querySelector('.temMaiuscula'),
    temMinuscula: document.querySelector('.temMinuscula'),
    temNumero: document.querySelector('.temNumero'),
    temEspecial: document.querySelector('.temEspecial'),
  }

  for (const [criterio, elemento] of Object.entries(elementos)) {
    estaCerto(SenhaValida[criterio], elemento)
  }
}

export function SenhasIguais(Senha, SenhaRepeat){
  if (SenhaRepeat === Senha) {
    document.querySelector('.senhacorreta').classList.add('Feito')
  }
}

function estaCerto(Validacao, div){
  if (Validacao) {
    div.classList.add('Feito')
  } else {
    div.classList.remove('Feito')
  }
}
