function validade() {
    var txtvl = document.querySelector('input#txtvd')
    var res = document.querySelector('div#res')
    var pais = (txtvl.value)
    
    res.innerHTML = `<p>Você está atualmente no <strong>${pais}!</strong></p>`
    if (pais == 'Brasil') {
        res.innerHTML += `<p>Você conseguiu seu visto, agora é <strong>Brasileiro</strong></p>`
    } else {
        res.innerHTML += `<p>Você infelizmente não conseguiu seu visto, ainda é <strong>estrangeiro</strong></p>`
    }
}

/*
var pais = 'Estados Unidos'
console.log(`Vivendo em ${pais}`)
if (pais == 'Brasil') {
    console.log('Você é Brasileiro')
} else {
    console.log ('Você é Estrangeiro!')
}
*/