let navegacao = document.getElementById("menu");

let xX = document.getElementById("close");

let hamburguer = document.getElementById("hamburguer")


function abrirMenu(){

    navegacao.style.display = "block";
    xX.style.display = "block";

    hamburguer.style.display = "none"

}

function fecharMenu(){
    navegacao.style.display = "none";
    xX.style.display = "none";

    hamburguer.style.display = "block";

}