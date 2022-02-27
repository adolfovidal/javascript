function calcular() {
    var txtv = document.querySelector('input#txtvel')
    var res = document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}Km/h </strong></p>`
    if (vel > 60) {
        res.innerHTML += 'Você está <strong>MULTADO</strong> por excesso de velocidade!'
    }
    res.innerHTML += '<p>Dirija sempre com o cinto de segurança!</p>' 
}