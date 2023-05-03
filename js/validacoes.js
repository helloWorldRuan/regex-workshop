function validarEmail() {
    const email = in_email.value.trim()
    const validEmail = /^(\w{2,})([._]?\w+)*@(\w{3,})([._]\w{2,})?([.-])[\w]{2,}$/.test(email)

    if (validEmail) {
        alert("✅ Email válido")
    } else {
        alert("⚠️ Email inválido")
    }
}

function validarSenha() {
    const senha = in_senha.value.trim()

    const hasUppercase = /[A-Z]/g.test(senha)
    const hasLowercase = /[a-z]/g.test(senha)
    const hasNumbers = /[0-9]/g.test(senha)
    const hasSpecialChar = /\D/g.test(senha)

    const validSenha = hasUppercase && hasLowercase && hasNumbers && hasSpecialChar

    if (validSenha) {
        alert("✅ Senha válida")
    } else {
        alert("⚠️ Senha inválida")
    }
}

let status = false
function toggleVisibilidadeSenha() {
    const input = document.getElementById("in_senha")
    document.querySelector(".ph-eye").classList.toggle("ph-eye-slash")

    if (status) {
        input.setAttribute('type', 'password')
        status = false
    } else {
        input.setAttribute('type', 'text')
        status = true
    }
}

function cadastrar() {
    validarEmail()
    validarSenha()
}