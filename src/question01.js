import leia from 'readline-sync'

var numero1 = leia.questionInt("Digite um numero INTEIRO!!! : ")
var numero2 = leia.questionInt("Digite um numero INTEIRO!!! : ")
var numero3 = leia.questionInt("Digite um numero INTEIRO!!! : ")

if(numero1 > numero2 || numero1 > numero3){
    if(numero2 < numero3 ){
console.log("Os numeros na ordem crescente sao : " + numero2 + numero3 + numero1 )
    }else{
        console.log("Os numeros na ordem crescente sao : " + numero3 + numero1 + numero2)
    }
}else if(numero2 > numero3 || numero2 > numero1){
    if(numero3 < numero1 ){
console.log("Os numeros na ordem crescente sao : " + numero3 + numero1 + numero2 )
    }else{
        console.log("Os numeros na ordem crescente sao : " + numero1 + numero3 + numero2 )
    }
}else if(numero3 > numero1 || numero3 > numero2){
    if(numero1 < numero2){
        console.log("Os numeros na ordem crescente sao : " + numero1 + numero2 + numero3 )
    }else{
        console.log("Os numeros na ordem crescente sao : " + numero2 + numero1 + numero3)
    }
}else{
    console.log("Erro")
}