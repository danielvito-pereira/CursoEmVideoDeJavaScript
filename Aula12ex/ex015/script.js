function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Tente novamente ')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')


        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'homem_bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'homem_jovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homem_adulto.png')
            } else {
                //idoso
                img.setAttribute('src', 'homem_idoso.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 12) {
                //Criança
                img.setAttribute('src', 'mulher_bebe.png')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'mulher_jovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulher_adulta_2.png')
            } else {
                //idoso
                img.setAttribute('src','mulher_idosa.png')
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = ` ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}