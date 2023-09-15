function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.` 
    if (hora >= 0 && hora <12 ) {
        //BOM DIA!
        img.src = 'fotos/foto.manha.jpg'
        document.body.style.background = '#97BFDE'
    } else if (hora >=12 && hora <= 18) {
        //BOA TARDE!
        img.src = 'fotos/foto.tarde.jpg'
        document.body.style.background = '#E4B28C'
    } else{
        //BOA NOITE!
        img.src = 'fotos/foto.noite.jpg'
        document.body.style.background = '#002D3A'
    }
}
