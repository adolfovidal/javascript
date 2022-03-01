function verificar() {
    var data = new Date();
    var ano = data.getFullYear(); // Ano com 4 dígitos
    var fAno = document.getElementById('txtano');
    var res = document.querySelector('div#res'); // id
    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fAno.value);
        // res.innerHTML = `Idade Calculada ${idade}`
        var genero = ''
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/cmo.png')
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jh.png')
            } else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/ah.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/vh.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/cma.png')
            }else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/jm.png')
            } else if ( idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/am.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/vm.png')
            }
        }    
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // Adicionar elemento imagem
    }
}