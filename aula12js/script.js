/*//Objeto window = janela do navegador 
window.console.log("Testei")
window.alert("Alertei")
window.prompt("Diz para mim, o que eu ja sei:")

//objeto = document = código html
console.log(document)
console.log(document.head)
console.log(document.body)



//Acessando elementos por tag, class e id
var titulo = document.getElementsByTagName("h1")
var paragrafos = document.getElementsByClassName("para")
var para3 = document.getElementById("p3")
console.log(p3)

paragrafos[0].innerText = "Tauba"
para3.innerHTML = "<h3>Novo texto aqui</h3>"

var p1 = document.getElementsByTagName("p")[0]
p1.style.backgroundColor = "red"

para3.style.color = "green" */

function cliquei(){
    console.log("Cliquei de novo")
}

function outroFoco(){
    console.log("Mudei o foco, nao esta mais na caixa")
}

function trocaTexto(textoCaixinha){
    var texto = document.getElementById("textoPraTrocar")
    texto.innerText = textoCaixinha.value

}

function corVerde(elemento){
    elemento.style.color = "green"
    elemento.style.fontSize = "60px"
}


function corAzul(elemento){
    elemento.style.color = "blue"
    elemento.style.fontSize = "60px"
}