var agora = new Date()  

var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if (hora < 12) {
    console.log('Bom dia')
} else  if(hora <= 18){
    console.log('Bom tarde')
} else if (hora == 0){
    console.log('Ba madrugada')
} else {
    console.log('Bom noite')
}