import leia from 'readline-sync'

//Celsius para Fahrenheit = `F = (C * 1.8) + 32`
// Fahrenheit para Celsius = `C = (F - 32) * (5/9)`

// Celsius para Kelvin = `K = C + 273.15`
// Kelvin para Celsius = `C = K - 273.15`

// Fahrenheit para Kelvin = `K = (F - 32) * (5/9) + 273.15`
// Kelvin para Fahrenheit = `F = (K - 273.15) * 1.8 + 32

var tempAtual = leia.questionFloat("Qual a temperatura atual : ")
var opcao = leia.keyInSelect(["C -> F", "C -> K", "F -> C", "K -> C", "K -> F"],
    "Informe a Conversao!"
)

switch(opcao){

    case 0:
        var F = (tempAtual * 1.8) + 32
        console.log(F)
        break;
        case 1 :
            var A = tempAtual + 273.15
            console.log(A)
            break;
            case 2:
                var B = (tempAtual - 32) * (5/9)
                console.log(B)
                break;
                case 3 :
            var C = tempAtual - 273.15
            console.log(C)
            break;
        case 3 :
            var D = (tempAtual - 273.15) * 1.8 + 32
            console.log(D)
}