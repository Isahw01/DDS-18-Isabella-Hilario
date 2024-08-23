var alunos = ["pedro", "Tiago", "João"]
var notasA = [8.0, 7.0, 6.0]
var notasB = [7.0, 5.7, 6.3]

function media(nota1, nota2){
    var n1 = nota1
    var n2 = nota2
    var media = (n1 + n2) /2
    return media

}

function mostraResultados(){
    for(var index in alunos){
        var notaPri = notasA[index]
        var notaSeg = notasB[index]    
        var mediaAual = media(notaPri, notaSeg)
        var final = situacao(mediaAual)
        console.log("O aluno", alunos[index], "teve média de", mediaAual, ". Sua situaçõ final é:", final)
    }
}

mostraResultados()


function situacao(media){
    if(media >= 7){
    return "Esta aprovado"
    }

    else if(media < 7 && media >=5){
        return "recuperação"

    }

else{
       return"Esta reprovado"
    }

}
