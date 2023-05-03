const patterns = {
    CNPJ: /^(\d{2})(\d{3})(\d{0,3})(\d{4})(\d{2})/,
    CPF_9: /^(\d{3})(\d{3})(\d{3})(\d{0,2})/,
    CPF_6: /^(\d{3})(\d{3})/,
    CPF_3: /^(\d{3})/,

    PHONE_11: /^(\d{2})(\d{5})(\d{4})/,
    PHONE_6: /^(\d{2})(\d{4})/,
    PHONE_2: /^(\d{2})/,

    CEP: /^(\d{5})/
}

function maskCPF_CNPJ() {
    let document = in_cpf_cnpj.value.replace(/\D+/g, "").trim()

    if (document.length > 14) {
        return false
    }

    if (document.length > 11) {
        document = document.replace(patterns.CNPJ, "$1.$2.$3/$4-$5")
    } else if (document.length > 9) {
        document = document.replace(patterns.CPF_9, "$1.$2.$3-$4")
    } else if (document.length > 6) {
        document = document.replace(patterns.CPF_6, "$1.$2.")
    } else if (document.length > 3) {
        document = document.replace(patterns.CPF_3, "$1.")
    }

    in_cpf_cnpj.value = document
}

function maskPhone() {
    let phone = in_phone.value.replace(/\D+/g, "").trim()

    if (phone.length > 11) {
        return false
    }

    if (phone.length > 10) {
        phone = phone.replace(patterns.PHONE_11, "($1) $2-$3")
    }  else if (phone.length > 6) {
        phone = phone.replace(patterns.PHONE_6, "($1) $2-")
    } else if (phone.length > 1) {
        phone = phone.replace(patterns.PHONE_2, "($1) ")
    }

    in_phone.value = phone
}

function maskCEP() {
    let cep = in_cep.value.replace(/\D+/g, "")

    if (cep.length > 8) {
        return false
    }

    if(cep.length > 5){
        cep = cep.replace(patterns.CEP, "$1-")
    }

    in_cep.value = cep
}
