//Obtenemos las propiedades del botón
let mybutton = document.getElementById("btn-back-to-top");

// Mostrar el botón cuando el usuario scrollea hacía abajo
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// Cuando el usuario selecciona el botón, sube hacía el menú
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}