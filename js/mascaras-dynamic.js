const patterns = {
    CNPJ: /^(\d{2})(\d{3})(\d{0,3})(\d{4})(\d{2})/,
    CPF_9: /^(\d{3})(\d{3})(\d{3})(\d{0,2})/,
    CPF_6: /^(\d{3})(\d{3})/,
    CPF_3: /^(\d{3})/,

    PHONE_11: /^(\d{2})(\d{5})(\d{4})/,
    PHONE_10: /^(\d{2})(\d{4})(\d{4})/,
    PHONE_6: /^(\d{2})(\d{4})/,
    PHONE_2: /^(\d{2})/,

    CEP: /^(\d{5})/
}

function maskCPF_CNPJ(event) {
    let key = event.key
    let document = event.target.value.replace(/\D+/g, "").trim()

    const invalidLength = document.length > 14
    const invalidKey = !["Backspace", "Delete"].includes(key)

    if (invalidKey && invalidLength) {
        return false
    }

    if (document.length > 11) {
        document = document.replace(patterns.CNPJ, "$1.$2.$3/$4-$5")
    } else if (document.length > 8) {
        document = document.replace(patterns.CPF_9, "$1.$2.$3-$4")
    } else if (document.length > 5) {
        document = document.replace(patterns.CPF_6, "$1.$2.")
    } else if (document.length > 2) {
        document = document.replace(patterns.CPF_3, "$1.")
    }

    event.target.value = document
}

function maskPhone(event) {
    let key = event.key
    let phone = event.target.value.replace(/\D+/g, "").trim()

    const invalidLength = phone.length > 11
    const invalidKey = !["Backspace", "Delete"].includes(key)

    if (invalidKey && invalidLength) {
        return false
    }

    if (phone.length > 10) {
        phone = phone.replace(patterns.PHONE_11, "($1) $2-$3")
    } else if (phone.length > 9) {
        phone = phone.replace(patterns.PHONE_10, "($1) $2-$3")
    } else if (phone.length > 5) {
        phone = phone.replace(patterns.PHONE_6, "($1) $2-")
    } else if (phone.length > 1) {
        phone = phone.replace(patterns.PHONE_2, "($1 ")
    }

    event.target.value = phone
}

function maskCEP(event) {
    let key = event.key
    let cep = event.target.value.replace(/\D+/g, "")

    const invalidLength = cep.length > 8
    const invalidKey = !["Backspace", "Delete"].includes(key)

    if (invalidKey && invalidLength) {
        return false
    }

    if(cep.length > 4){
        cep = cep.replace(patterns.CEP, "$1-")
    }

    event.target.value = cep

}
