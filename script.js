const titulo = document.getElementById("titulo");
const textoInicial = document.getElementById("textoInicial");
const textos = ["Hola", "Hello", "Bonjour", "Ciao", "Salam"];
let estadoInicial = true;
let posicionTexto= 0;
textoInicial.innerText = textos[0];
textoInicial.addEventListener("click", () => {
    if(posicionTexto <textos.length - 1) {
        posicionTexto = posicionTexto + 1;
        textoInicial.innerText = textos [posicionTexto]
       
    } else {
        posicionTexto = 0
        textoInicial.innerText =textos[posicionTexto]
       
    }
  
})
titulo.addEventListener("click", () => {
    if(estadoInicial === true) {
        titulo.innerText = "El Mago de Oz";
    } else {
        titulo.innerText = "El mago adivinara quien va ganar el mundial";
    }
    estadoInicial = !estadoInicial;
})


