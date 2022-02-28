function carregar() {
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`
    //var hora = 18
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        // Boa tarde!
        img.src = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        // Boa noite!
        img.src = 'imagens/fotonoite.png'
        document.body.style.background = '#5c3a79'
    }
}

