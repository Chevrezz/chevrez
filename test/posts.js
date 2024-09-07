document.querySelectorAll('.btn').forEach(function(button, index) {
  button.addEventListener('click', function() {
    var textElement = document.querySelectorAll('.ocultar')[index];
    textElement.classList.toggle("mostrar");

    if (textElement.classList.contains("mostrar")) {
      this.innerHTML = "Ver menos";
    } else {
      this.innerHTML = "Ver más";
    }
  });
});

window.onload = function() {
let img = document.getElementsByClassName('image');

  for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function() {
      openImage(this.src)
    });
  }
};

function openImage(src) {
  window.open(src, "_self");
}

function copiar() {
  let result = document.getElementById('result').innerHTML 
  alert("Link copiado");
  navigator.clipboard.writeText(result)
}
