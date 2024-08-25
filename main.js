let textarea = document.querySelector('#textarea');
let div = document.querySelector('#div');

function funcionX(e) {
  div.innerHTML = e.target.value;
}
textarea.addEventListener('keyup', funcionX, false);

function add() {
  let title = document.getElementById('title').value;
  let desp = document.getElementById('desp').value;
  let autor = document.getElementById('autor').value;
  console.log(title + '\n' + desp + '\n' + autor);
  console.log(div.value)
}


/*
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = '';
  
  return "¿Estás seguro de que deseas actualizar la página, se borrara todo lo que haz escrito?";
});
*/