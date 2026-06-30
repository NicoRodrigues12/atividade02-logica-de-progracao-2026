import leia from 'readline-sync'

var nota1 = leia.questionFloat("Informe sua primeira nota : ")
var nota2 = leia.questionFloat("Informe sua segunda nota : ")
var nota3 = leia.questionFloat("Informe sua terceira nota : ")
var nota4 = leia.questionFloat("Informe sua quarta nota : ")
var nota5 = leia.questionFloat("Informe sua quinta nota : ")
var nota6 = leia.questionFloat("Informe sua sexta nota : ")

if(nota1 > nota2 && nota1 > nota3 && nota1 > nota4 && nota1 > nota5 && nota1 > nota6){
    if(nota2 < nota1 && nota2 < nota3 && nota2 < nota4 && nota2 < nota5 && nota2 < nota6){
        var media = (nota3 + nota4 + nota5 + nota6) / 4
        console.log("Media : " + media)
    }else if(nota3 < nota2 && nota3 < nota4 && nota3 < nota5 && nota3 < nota6 && nota3 < nota1){
        var media = (nota2 + nota4 + nota5 +nota6) / 4
        console.log("Media : " + media)
    }else if(nota4 < nota2 && nota4 < nota3 && nota4 < nota5 && nota4 < nota6 && nota4 < nota1){
        var media = (nota2 + nota3 + nota5 + nota6) / 4
        console.log("Media : " + media)
    }else if(nota5 < nota2 && nota5 < nota3 && nota5 < nota4 && nota5 < nota6 && nota5 < nota1){
        var media = (nota2 + nota3 + nota4 + nota6) / 4
        console.log("Media : " + media)
    }else if(nota6 < nota2 && nota6 < nota4 && nota6 < nota5 && nota6 < nota3 && nota6 < nota1){
        var media = (nota2 + nota3 + nota4 + nota6) / 4
        console.log("Media : " + media)
    }
}else if(nota1 < nota2 && nota1 < nota3 && nota1 < nota4 && nota1 < nota5 && nota1 < nota6){
    if(nota2 > nota1 && nota2 > nota3 && nota2 > nota4 && nota2 > nota5 && nota2 > nota6){
        var media = (nota3 + nota4 + nota5 + nota6) / 4
        console.log("Media : " + media)
    }else if(nota3 > nota2 && nota3 > nota4 && nota3 > nota5 && nota3 > nota6 && nota3 > nota1){
        var media = (nota2 + nota4 + nota5 +nota6) / 4
        console.log("Media : " + media)
    }else if(nota4 > nota2 && nota4 > nota3 && nota4 > nota5 && nota4 > nota6 && nota4 > nota1){
        var media = (nota2 + nota3 + nota5 + nota6) / 4
        console.log("Media : " + media)
    }else if(nota5 < nota2 && nota5 > nota3 && nota5 > nota4 && nota5 > nota6 && nota5 > nota1){
        var media = (nota2 + nota3 + nota4 + nota6) / 4
        console.log("Media : " + media)
    }else if(nota6 < nota2 && nota6 > nota4 && nota6 > nota5 && nota6 > nota3 && nota6 > nota1){
        var media = (nota2 + nota3 + nota4 + nota6) / 4
        console.log("Media : " + media)
    }
}