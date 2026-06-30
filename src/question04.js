import leia from 'readline-sync'

var diaria = leia.questionInt("Fala rei!, quantos dias voce vai pegar de diaria ? : ")
var idade = leia.questionInt("Quantos anos voce tem ? : ")

if(diaria <= 5){
if(idade >= 60){
    var dias = 100 * diaria
    var desconto = dias * 0.20
    var total = dias - desconto
    console.log("Valor : " + total)
    }else{
        var dias = 100 * diaria
        console.log("O valor a se pagar no final da estadia, sera de : " + dias)
    }
}else if(diaria >= 6 && diaria <= 10){
    if(idade >= 60){
    var dias = 90 * diaria
    var desconto = dias * 0.20
    var total = dias - desconto
    console.log("Valor : " + total)
    }else{
        var dias = 90 * diaria
        console.log("O valor a se pagar no final da estadia, sera de : " + dias)
}
}else{
    if(idade >= 60){
    var dias = 80 * diaria
    var desconto = dias * 0.20
    var total = dias - desconto
    console.log("Valor : " + total)
    }else{
        var dias = 80 * diaria
        console.log("O valor a se pagar no final da estadia, sera de : " + dias)
}
}
