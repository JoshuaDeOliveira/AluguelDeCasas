import {GuardarInformações} from "./InformaçõesUser.js";

export function GuardarUsuario(){
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