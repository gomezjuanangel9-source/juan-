const titulo = document.getElementById("titulo");

titulo.addEventListener("click", function() {
  if (titulo.textContent === "El Mago de Oz") {
    titulo.textContent = "Adivina quién va a quedar campeón del mundial";
  } else {
    titulo.textContent = "El Mago de Oz";
  }
});
