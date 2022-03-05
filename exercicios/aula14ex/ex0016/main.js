function contar() {
    let startText = document.querySelector('input#stxt')
    let endText = document.querySelector('input#etxt')
    let passText = document.querySelector('input#ptxt')
    let accountResult = document.querySelector('div#res')

    if (startText.value.length == 0 || endText.value.length == 0 || passText.value.length == 0) {
        accountResult.innerHTML = 'Impossível contar...'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        accountResult.innerHTML = 'Contando: <br>'
        let sText = Number(startText.value)
        let eText = Number(endText.value)
        let pText = Number(passText.value)
        if (pText <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            pText = 1
        }
        if (sText < eText) {
            // Contagem Crescente
            for (let counter = sText; counter <= eText; counter += pText) {
                accountResult.innerHTML += ` ${counter} \u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let counter = sText; counter >= eText; counter -= pText) {
                accountResult.innerHTML += `${counter} \u{1F449}`
            }
        }
        accountResult.innerHTML += `\u{1F3C1}`
    }
    
}