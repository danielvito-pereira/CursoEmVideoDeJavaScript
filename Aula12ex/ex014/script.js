function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        //Bom Dia
        img.src = 'manha.jpg'
        document.body.style.background = '#d6780f'
    } else if (hora >= 12 && hora <= 18){
        //Boa Tarde
        img.src = 'tarde.jpg'
        document.body.style.background ='#d73d01'
    } else {
        //Boa Noite
        img.src = 'noite.jpg'
        document.body.style.background = '#294f8d'
    }
}