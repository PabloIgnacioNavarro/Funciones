pintarFondo = function (color) {
  let parrafo = document.querySelector("#parrafo");
  parrafo.style.backgroundColor = color;
};
function modificarParrafo(texto, colorTexto, colorDeFondo) {
  let parrafo = document.querySelector("#parrafo");
  parrafo.innerHTML = texto;
  parrafo.style.color = colorTexto;
  parrafo.style.backgroundColor = colorDeFondo;
}
modificarParrafo("Hello Pablo", "green", "black");
