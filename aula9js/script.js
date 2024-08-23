//mostra alerta na pagina
//alert("OUTRA MENSAGEM")
/*CONSOLE
console.log("OLHA A MENSAGEM")

var texto = "Taylor Swift"
var numero = 1989
var theBest = true
var nulo = null
var indefinido

console.log(typeof(texto))
console.log(typeof(numero))
console.log(typeof(theBest))
console.log(typeof(nulo))
console.log(typeof(indefinido))

*/

//Operadores

//Aritméticos: +-*/%
/*var a = 10
var b = 3

console.log("Soma:", a+b)
console.log("Subtração:", a-b)
console.log("Multiplicação:", a*b)
console.log("Divisão:", a/b)
console.log("Módulo:", a%b)

//Lógicos: &&, ||, !
var verdade = true
var mentira = false

console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

//Relacionais: >,<,>=,<=,==,!=,===,!==
var a = 10
var b = 5
var c = "10"

console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b)
console.log(a != b)
console.log(a === c)
console.log(a !== c)



//condicionais
//IF

var estaVivo = null
if(estaVivo == true){
    console.log("Está vivo");

}
else if(!estaVivo == false){
    console.log("Esta morto");
}
else{
    console.log("Esta nada");
}

//Switch
var camisa = "Amarela"
switch(camisa){
    case "Azul":
        console.log("A camisa é azul")
        break
        case "Amarela":
            console.log("A camisa é Amarela")
            break
            case "preta":
                console.log("A camisa é preta")
                break
                default:
                        console.log("A camisa é sei la")
                        break
}



// Loops
//For
for(var i = 0; i < 5; i++){
    console.log("Estoy ahi");

}

    console.log("Acabou o FOR");

    //While

    var it = 1
    while (it < 10) {
        console.log("EStou aqui 2 -O retorno");
        console.log(it);
        it++

    }



function teste1(){
    console.log("EStou aqui na função 1");
}


function teste2(){
    console.log("Estou aqui na função 2");
}

teste2()




//INTERAÇÃO COM O USUARIO VIA PROMPT

var resposta = prompt("Digite algo")
var resposta2 = prompt("Digite um outro algo")

console.log(resposta, resposta2)

alert(resposta + resposta2)


*/

6
var numero = prompt("Digite seu numero")
var numero2 = prompt("Digite outro numero")
var resultado = Number(numero) + Number(numero2)

console.log(resultado)


alert(resultado)
