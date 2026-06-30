import leia from 'readline-sync'

var gols = leia.questionInt("Quantos gols o nosso CRAQUE DA PELOTA fez? : ")
var passecerto = leia.questionInt("Quantos passes certos o nosso CRAQUE DA PELOTA FEZ ? : ")
var abra = leia.questionInt("Quantos passes o nosso CRAQUE DA PELOTA errou ? : ")

var pontos = (gols * 100) + (passecerto * 10)
var pontosmenospasses = pontos - (abra * 5)
if(pontosmenospasses < 50){
    console.log("Partida PÉSSIMA do nosso CRAQUE DA PELOTA!")
}else if(pontosmenospasses >= 50 && pontosmenospasses <= 100){
console.log("Partida RUIM do nosso CRAQUE DA PELOTA!")
}else if(pontosmenospasses >= 101 && pontosmenospasses <= 150){
    console.log("Fez o basico ne meu CRAQUE DA PELOTA!")
}else if(pontosmenospasses >= 151 && pontosmenospasses <= 200){
    console.log("nosso CRAQUE DA PELOTA foi bem na partida em!")
}else{
    console.log("Jogou de mais meu CRAQUE DA PELOTA!, entreguem a bola de ouro a este homem!")
}